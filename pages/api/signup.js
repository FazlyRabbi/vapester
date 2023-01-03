export default async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    const strapiRes = await fetch(
      `http://localhost:1337/api/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      }
    );

    const data = await strapiRes.json();

    res.send(data);
  } else {
    res.send(req.method, "this method is not allowd!");
  }
};
