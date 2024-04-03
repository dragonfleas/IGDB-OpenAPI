window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
	url: "https://igdb-openapi.s-crypt.co/IGDB-OpenAPI.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
	displayRequestDuration: true,
	persistAuthorization: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "BaseLayout",
  });

  //</editor-fold>
};
