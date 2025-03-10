// pages/api/submit-name.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName } = req.body;
    
    // Here, you could do something with firstName and lastName,
    // like storing it in a database or performing some logic.
    
    // For demonstration, let's just return a message
    const message = `Hello, ${firstName} ${lastName}!`;

    return res.status(200).json({ success: true, message });
  } else {
    // If it's not a POST request, return an error or handle otherwise
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
