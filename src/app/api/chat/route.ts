import Groq from "groq-sdk";
import { NextRequest } from "next/server";

// Lazy init — avoids build-time throw when GROQ_API_KEY is absent
let _groq: Groq | null = null;
function getGroq() {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("GROQ_API_KEY environment variable is not set");
  if (!_groq) _groq = new Groq({ apiKey: key });
  return _groq;
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `Tu es l'assistant IA de Wikolabs, une société spécialisée en intelligence artificielle et data engineering basée à Madagascar.

Wikolabs propose 5 domaines de services :
1. Recherche & Recommandation — moteurs sémantiques, multimodaux, recommandation personnalisée
2. Logiciels IA de Production — agents IA agentiques, plateformes RAG, pipelines de données, MLOps, fine-tuning
3. Intelligence Décisionnelle — BI en langage naturel, forecasting, détection d'anomalies, CRM multi-agent
4. Automatisation Commerciale — cycle commercial complet : sourcing, outreach, qualification BANT, setting, closing, onboarding
5. Données Non Structurées & Vision — OCR, extraction documentaire, détection d'objets, BIM, point cloud, logistique

Applications en production : ProductSearch (recherche produits multimodale), PrestaSearch (recherche prestataires), BI Wikolabs (BI en langage naturel), MediWyz (santé digitale multi-pays).

Processus : 6 étapes — Échange découverte, Cadrage & proposition, Kick-off, Sprints & démos, Recette & production, Support.

Contact : team@wikolabs.com | contact@wikolabs.com | +261 38 66 261 00

Règles absolues :
- Ne jamais mentionner de tarifs ou prix
- Ne jamais mentionner les membres de l'équipe ou fondateurs par leur nom
- Répondre dans la langue de l'utilisateur (français ou anglais)
- Ton professionnel et orienté résultats business (interlocuteur = dirigeant d'entreprise)
- Réponses concises et directes, max 3-4 paragraphes
- Toujours orienter vers la prise de contact pour aller plus loin`;

export async function POST(req: NextRequest) {
  try {
    const { messages, model = "llama-3.3-70b-versatile" } = await req.json();

    const stream = await getGroq().chat.completions.create({
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      stream: true,
      max_tokens: 800,
      temperature: 0.65,
    });

    const readable = new ReadableStream({
      async start(controller) {
        const enc = new TextEncoder();
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content ?? "";
          if (text) controller.enqueue(enc.encode(text));
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Groq API error:", msg);
    return new Response(msg, { status: 500 });
  }
}
