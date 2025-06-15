document.getElementById('registerBtn').addEventListener('click', function(e) {
  e.preventDefault();

  const formHtml = `
    <!DOCTYPE html>
    <html lang="uz">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ro'yxatdan o'tish</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          color: white;
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          min-height: 100vh;
        }
        body::before {
          content: "";
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: -1;
        }
        h1 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px black;
        }
        form {
          max-width: 400px;
          margin: 0 auto;
          background: rgba(0,0,0,0.6);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.7);
        }
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
        }
        input, select, textarea {
          width: 100%;
          padding: 8px;
          margin-bottom: 15px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
        }
        button {
          background-color: #00aaff;
          color: white;
          border: none;
          padding: 12px;
          width: 100%;
          font-size: 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0077cc;
        }
      </style>
    </head>
    <body>
      <h1>Ro'yxatdan o'tish</h1>
      <form id="registrationForm">
        <label for="name">Ism:</label>
        <input type="text" id="name" name="name" required />

        <label for="phone">Telefon:</label>
        <input type="tel" id="phone" name="phone" required pattern="[0-9+\\- ]{7,15}" placeholder="+998 ..." />

        <label for="course">Kurs tanlang:</label>
        <select id="course" name="course" required>
          <option value="">-- Tanlang --</option>
          <option value="Rus tili">Rus tili</option>
          <option value="Ingliz tili">Ingliz tili</option>
          <option value="Kompyuter savodxonligi">Kompyuter savodxonligi</option>
          <option value="Kimyo">Kimyo</option>
          <option value="Biologiya">Biologiya</option>
        </select>

        <label for="notes">Qo'shimcha izoh:</label>
        <textarea id="notes" name="notes" rows="3" placeholder="Istak yoki savollar..."></textarea>

        <button type="submit">Ro'yxatdan o'tish</button>
      </form>

      <script>
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Ro‘yxatdan o‘tish uchun arizangiz qabul qilindi! Tez orada siz bilan bog‘lanamiz.');
          window.close();
        });
      </script>
    </body>
    </html>
  `;

  const newWindow = window.open('', '_blank', 'width=500,height=650');
  newWindow.document.write(formHtml);
  newWindow.document.close();
});