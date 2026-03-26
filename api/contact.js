// Serverless function — Vercel (api/contact.js)
// Déploiement : placer ce fichier à la racine du projet (pas dans frontend/)
// Documentation de configuration : voir INTEGRATIONS.md

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { nom, cabinet, email, besoin } = req.body;

  if (!nom || !cabinet || !email || !besoin) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,        // ex: "Trente Deux <no-reply@trentedeux.fr>"
      to: process.env.RESEND_TO_EMAIL,            // ex: "contact@trentedeux.fr"
      replyTo: email,
      subject: `Nouvelle demande de contact — ${cabinet}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <h2 style="color: #006618; border-bottom: 1px solid #D9C2A7; padding-bottom: 12px;">
            Nouvelle demande de contact
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 160px;">Nom :</td>
              <td style="padding: 8px 0;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Cabinet :</td>
              <td style="padding: 8px 0;">${cabinet}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email :</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #006618;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Besoin :</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${besoin}</td>
            </tr>
          </table>
          <p style="margin-top: 32px; font-size: 12px; color: #999;">
            Message envoyé depuis le site trentedeux.fr
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
  }
};
