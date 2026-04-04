const fs = require('fs');
let main = fs.readFileSync('src/components/Main.jsx', 'utf8');

// Add openModal prop
main = main.replace('export default function Main() {', 'export default function Main({ openModal }) {');

// Replace Button: Agende uma consulta
main = main.replace(/href="https:\/\/wa.me\/5522997466590" target="_blank" rel="noreferrer noopener"( [^>]*)aria-label="Agende uma consulta"/g, 'href="#" onClick={(e) => { e.preventDefault(); openModal(); }}$1aria-label="Agende uma consulta"');

// Replace Button: Entre em contato
main = main.replace(/href="https:\/\/wa.me\/5522997466590"\s+target="_blank"\s+rel="noreferrer noopener"( [^>]*)aria-label="Entre em contato"/g, 'href="#" onClick={(e) => { e.preventDefault(); openModal(); }}$1aria-label="Entre em contato"');

// Replace Button: Atendimento online
main = main.replace(/href="[^"]*"\s+target="_self"( [^>]*)aria-label="Atendimento online"/g, 'href="#" onClick={(e) => { e.preventDefault(); openModal(); }}$1aria-label="Atendimento online"');

// Replace Button: Agende o seu horário
main = main.replace(/href="https:\/\/wa.me\/5522997466590"\s+target="_blank"\s+rel="noreferrer noopener"( [^>]*)aria-label="Agende o seu horário"/g, 'href="#" onClick={(e) => { e.preventDefault(); openModal(); }}$1aria-label="Agende o seu horário"');

fs.writeFileSync('src/components/Main.jsx', main);

let app = fs.readFileSync('src/App.jsx', 'utf8');

app = app.replace("import React from 'react';", "import React, { useState } from 'react';\nimport { BrowserRouter as Router, Routes, Route } from 'react-router-dom';\nimport AppointmentModal from './components/AppointmentModal';\nimport Admin from './pages/Admin';\nimport { Toaster } from 'react-hot-toast';");

app = app.replace("export default function App() {", "function WebSite() {\n  const [isModalOpen, setIsModalOpen] = useState(false);\n");

app = app.replace("<Header />", "<Header />");
app = app.replace("<Main />", "<Main openModal={() => setIsModalOpen(true)} />");

app = app.replace("</div>\n  );\n}", "</div>\n<AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />\n</div>\n  );\n}\n\nexport default function App() {\n  return (\n    <Router>\n      <Toaster />\n      <Routes>\n        <Route path=\"/\" element={<WebSite />} />\n        <Route path=\"/admin\" element={<Admin />} />\n      </Routes>\n    </Router>\n  );\n}");

fs.writeFileSync('src/App.jsx', app);
console.log('Patch complete.');
