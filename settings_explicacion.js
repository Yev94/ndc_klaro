// En data-config tenemos que poner la variable que vamos a usar para hacer la configuración
var klaroConfig = {
  version: 1,

  // id del DIV que contiene el banner
  // Si se usa un id existente se sobreescribe el contenido del elemento
  elementID: 'klaro',

  // Override del estilo del banner
  styling: {
    theme: ['light', 'top', 'wide'],
  },

  // En false carga el banner en el momento que se carga la página
  // En true carga el banner manualmente
  noAutoLoad: false,

  // Renderiza "description" aceptando código HTML si está en true
  htmlTexts: true,

  // Si está en true el banner se renderiza en un div con id "klaro"
  // Si se pone el id en "elementID" de un elemento existente se sobrescribe el contenido
  embedded: false,

  // Puede agrupara los servicios por propósito (Ads, Analytics, etc.)
  groupByPurpose: true,

  // Puede guardar la configuración en una cookie o en localStorage (Default: 'cookie')
  storageMethod: 'cookie',

  // Nombre de la cookie o localStorage (Default: 'klaro')
  cookieName: 'klaro',

  // Tiempo de expiración de la cookie en días (Default: 120)
  cookieExpiresAfterDays: 365,

  // Permite especificar el dominio de la cookie de consentimiento
  // Lo que puede ser útil si deseas que el consentimiento del usuario se aplique en múltiples subdominios.
  // Sin embargo, es importante usarlo con precaución ya que no todos los navegadores lo permiten.
  //cookieDomain: '.github.com',

  // Permite controlar la disponibilidad de la cookie de consentimiento en función de la ruta del URL de tu sitio web. 
  // Esto puede ser útil si deseas segmentar o restringir las decisiones de consentimiento del usuario a partes específicas de tu sitio.
  //cookiePath: '/',

  // Si "default" está en true, los servicios estarán activos por defecto
  // Se puede sobrescribir en cada servicio en la sección de services > default de cada servicio
  default: false,

  // Si "mustConsent" está en true, el banner del modal con las opciones se mostrará hasta que el usuario acepte explícitamente
  mustConsent: false,

  // Enseñar botón aceptar todo en el modal de config
  acceptAll: true,

  // En true esconde el botón de rechazar todo
  hideDeclineAll: true,

  // Esconder "Leer más"
  hideLearnMore: false,

  // Enseñar el banner como modal en vez de como barra
  noticeAsModal: true,

  // Deshabilita el link hecho Por
  disablePoweredBy: true,

  // Añade Clases al Div que contenta el banner
  //additionalClass: 'my-klaro',

  // Se puede poner un idioma en específico, si no lo tiene usa lo que haya en la etiqueta HTML del principio, y si no ya por defecto lo coge en inglés.
  //lang: 'en',

  // Traducciones
  translations: {
    // Por de fecto
    zz: {
      title: 'Configuración de Cookies',
      privacyPolicyUrl: '/politica-de-cookies/',
      consentModal: {
        description:
          'Aquí puede evaluar y personalizar los servicios que nos gustaría utilizar en este sitio web. ¡Usted decide! Habilite o deshabilite los servicios como considere oportuno.</br>',
      },
    },
    es: {
      privacyPolicyUrl: '/politica-de-cookies/',
      consentModal: {
        title: "Configuración de Cookies",
        privacyPolicy: {
          name: "Política de Cookies",
          text: "Para más información, consulte nuestra {privacyPolicy}."
        },
        description: "Las cookies y otras tecnologías similares son una parte esencial de cómo funciona nuestra Plataforma. El objetivo principal de las cookies es que tu experiencia de navegación sea más cómoda y eficiente y poder mejorar nuestros servicios y la propia Plataforma. Así mismo, utilizamos cookies para poder mostrarte publicidad que sea de tu interés cuando visites webs y apps de terceros. Aquí podrás podrás activar y/o desactivar las cookies de acuerdo con tus preferencias, salvo aquellas Cookies que son estrictamente necesarias para el funcionamiento de la Plataforma. Ten en cuenta que el bloqueo de algunas cookies puede afectar tu experiencia en la Plataforma y el funcionamiento de la misma. Al pulsar “Confirmar Preferencias”, se guardará la selección de cookies que has realizado. Si no has seleccionado ninguna opción, pulsar este botón equivaldrá a rechazar todas las cookies.",
        privacyPolicy: {
          name: 'Política de Cookies',
          text: 'Para más información, consulte nuestra {privacyPolicy}.',
        },
      },
      
      service: {
        disableAll: {
          title: "Aceptar o Rechazar todas las Cookies",
          description: "Utilice el interruptor para aceptar o rechazar todas las cookies excepto las necesarias.",
        },
      },
      consentNotice: {
        description: "<h1>Cookies</h1>Utilizamos cookies propias y de terceros con finalidades analíticas y para mostrarte publicidad relacionada con tus preferencias a partir de tus hábitos de navegación y tu perfil. Puedes configurar o rechazar las cookies haciendo click en “Configuración de Cookies”. También puedes aceptar todas las cookies pulsando el botón “Aceptar todas las Cookies”. Para más información, consulte nuestra {privacyPolicy}.",
        privacyPolicy: {
          name: 'Política de Cookies',
        },
        learnMore: "Preferencias"
      },
      privacyPolicy: {
        name: 'Política de Cookies',
        text: 'Para más información, consulte nuestra {privacyPolicy}.',
      },
      ok: "Aceptar", // Botón de aceptar
      decline: "Rechazar", // Botón de rechazar
      acceptSelected: "Guardar Preferencias", // Botón de aceptar seleccionados
      acceptAll: "Aceptar Todas las Cookies", // Botón de aceptar todos
      inlineTracker: {
        description: 'Example of an inline tracking script',
      },
      externalTracker: {
        description: 'Example of an external tracking script',
      },
      adsense: {
        description: 'Displaying of advertisements (just an example)',
        title: 'Google Adsense Advertisement',
      },
      matomo: {
        description: 'Collecting of visitor statistics',
      },
      camera: {
        description:
          'A surveillance camera (just an example for an IMG tag)',
      },
      cloudflare: {
        description: 'Protection against DDoS attacks',
      },
      intercom: {
        description:
          'Chat widget & collecting of visitor statistics (just an example)',
      },
      mouseflow: {
        description: 'Real-Time user analytics (just an example)',
      },
      googleFonts: {
        description: 'Web fonts hosted by Google',
      },
      purposes: {
        analytics: {
          title: "Analítica",
          description: "Esto es para la anlítica.",
        },
        advertising: {
          title: "Anuncios",
          description: "Esto es para la anlítica.",
        },
        styling: {
          title: "Personalización",
          description: "Esto es para la anlítica.",
        }, 
        functional:{
          title: "Funcionales",
          description: "Necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Usualmente están configuradas para responder a acciones hechas por usted para recibir servicios, tales como ajustar sus preferencias de privacidad, iniciar sesión en el sitio, o llenar formularios.",
        },
        security: 'Seguridad',
      },
    },
  },

  // Lista de cookies
  services: [
    {
      name: 'twitter',
      default: false,
      contextualConsentOnly: true,
      purposes: ['marketing'],
    },
    {
      name: 'youtube',
      default: true,
      purposes: ['marketing'],
    },
    {
      // Each service should have a unique (and short) name.
      name: 'matomo',

      // If "default" is set to true, the service will be enabled by default
      // Overwrites global "default" setting.
      // We recommend leaving this to "false" for services that collect
      // personal information.
      default: true,

      // The title of your service as listed in the consent modal.
      title: 'Matomo/Piwik',

      // The purpose(s) of this service. Will be listed on the consent notice.
      // Do not forget to add translations for all purposes you list here.
      purposes: ['analytics'],

      // A list of regex expressions or strings giving the names of
      // cookies set by this service. If the user withdraws consent for a
      // given service, Klaro will then automatically delete all matching
      // cookies.
      cookies: [
        // you can also explicitly provide a path and a domain for
        // a given cookie. This is necessary if you have services that
        // set cookies for a path that is not "/" or a domain that
        // is not the current domain. If you do not set these values
        // properly, the cookie can't be deleted by Klaro
        // (there is no way to access the path or domain of a cookie in JS)
        // Notice that it is not possible to delete cookies that were set
        // on a third-party domain! See the note at mdn:
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#new-cookie_domain
        [/^_pk_.*$/, '/', 'klaro.kiprotect.com'], //for the production version
        [/^_pk_.*$/, '/', 'localhost'], //for the local version
        'piwik_ignore',
      ],

      // An optional callback function that will be called each time
      // the consent state for the service changes (true=consented). Passes
      // the `service` config as the second parameter as well.
      callback: function (consent, service) {
        // This is an example callback function.
        console.log(
          'User consent for service ' + service.name + ': consent=' + consent
        );
        // To be used in conjunction with Matomo 'requireCookieConsent' Feature, Matomo 3.14.0 or newer
        // For further Information see https://matomo.org/faq/new-to-piwik/how-can-i-still-track-a-visitor-without-cookies-even-if-they-decline-the-cookie-consent/
        /*
        if(consent==true){
            _paq.push(['rememberCookieConsentGiven']);
        } else {
            _paq.push(['forgetCookieConsentGiven']);
        }
        */
      },

      // If "required" is set to true, Klaro will not allow this service to
      // be disabled by the user.
      required: false,

      // If "optOut" is set to true, Klaro will load this service even before
      // the user gave explicit consent.
      // We recommend always leaving this "false".
      optOut: false,

      // If "onlyOnce" is set to true, the service will only be executed
      // once regardless how often the user toggles it on and off.
      onlyOnce: true,
    },

    // The services will appear in the modal in the same order as defined here.
    {
      name: 'inlineTracker',
      title: 'Inline Tracker',
      purposes: ['analytics'],
      cookies: ['inline-tracker'],
      optOut: false,
    },
    {
      name: 'externalTracker',
      title: 'External Tracker',
      purposes: ['analytics', 'security'],
      cookies: ['external-tracker'],
    },
    {
      name: 'intercom',
      title: 'Intercom',
      default: true,
      purposes: ['livechat'],
    },
    {
      name: 'mouseflow',
      title: 'Mouseflow',
      purposes: ['analytics'],
    },
    {
      name: 'adsense',
      // if you omit the title here Klaro will try to look it up in the
      // translations
      //title: 'Google AdSense',
      purposes: ['advertising'],
    },
    {
      name: 'camera',
      title: 'Surveillance Camera',
      purposes: ['security'],
    },
    /*        {
              name: 'googleFonts',
              title: 'Google Fonts',
              purposes: ['styling'],
          },*/
    {
      name: 'cloudflare',
      title: 'Cloudflare',
      purposes: ['security'],
      required: true,
    },
    {
      name: 'Facebook Ads',
      title: 'Facebook Ads',
      purposes: ['marketing'],
      default: true,
    },
    {
      name: 'Google Ads',
      title: 'Google Ads',
      purposes: ['marketing'],
      default: true
    },
    {
      name: 'Google Analytics',
      default: true,
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookie: ['_ga']
    },
  ],
};