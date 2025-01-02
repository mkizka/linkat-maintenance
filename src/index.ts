const content = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Linkat is under maintenance</title>
    <!-- bluesky-profile-feed-embed -->
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/+esm"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/dist/core.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/themes/light.min.css"
      media="(prefers-color-scheme: light)"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bluesky-profile-feed-embed@^1.0.0/themes/dim.min.css"
      media="(prefers-color-scheme: dark)"
    />
    <!-- murecho font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Murecho:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Murecho", sans-serif;
      }
    </style>
    <!-- tailwindcss -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-200 min-h-screen">
    <main class="container mx-auto px-4 py-12">
      <div class="max-w-2xl mx-auto rounded-lg shadow-lg p-8 bg-gray-50">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-800">
            Linkat is under maintenance
          </h1>
        </div>
        <bluesky-profile-feed
          class="w-full"
          actor="did:plc:thpg3rkgfslxsgeekhkxgdyu"
          include-pins
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bsky.app/profile/did:plc:thpg3rkgfslxsgeekhkxgdyu"
            class="bluesky-profile-feed-fallback text-blue-600 hover:text-blue-800"
          >
            Posts by Linkat (@linkat.blue)
          </a>
        </bluesky-profile-feed>
      </div>
    </main>
  </body>
</html>
`;

export default {
  async fetch() {
    return new Response(content, {
      status: 503,
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
} satisfies ExportedHandler<Env>;
