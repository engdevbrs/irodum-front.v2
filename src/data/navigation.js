const menus = [
  {
    id: 1,
    name: "Inicio",
    path: "/"
  },
  {
    id: 2,
    name: "Buscar Trabajos",
    children: [
      {
        id: 1,
        name: "Servicios",
        path: "/servicios"
      },
      {
        id: 2,
        name: "Proyectos",
        path: "/proyectos"
      }
    ],
  },
  {
    id: 3,
    name: "Usuarios",
    children: [
      {
        id: 1,
        name: "Freelancer",
        path: "/freelancers"
      },
      // {
      //   id: 1,
      //   name: "Dashboard",
      //   children: [
      //     { id: 1, name: "Dashboard", path: "/dashboard" },
      //     { id: 2, name: "Proposal", path: "/proposal" },
      //     { id: 3, name: "Saved", path: "/saved" },
      //     { id: 4, name: "Message", path: "/message" },
      //     { id: 5, name: "Reviews", path: "/reviews" },
      //     { id: 6, name: "Invoice", path: "/invoice" },
      //     { id: 7, name: "Payouts", path: "/payouts" },
      //     { id: 8, name: "Statement", path: "/statements" },
      //     { id: 9, name: "Manage Service", path: "/manage-services" },
      //     { id: 10, name: "Add Services", path: "/add-services" },
      //     { id: 11, name: "Manage Jobs", path: "/manage-jobs" },
      //     {
      //       id: 12,
      //       name: "Manage Project",
      //       path: "/manage-projects",
      //     },
      //     {
      //       id: 13,
      //       name: "Create Project",
      //       path: "/create-projects",
      //     },
      //     { id: 14, name: "My Profile", path: "/mi-perfil" },
      //   ],
      // },
    ],
  },
  {
    id: 4,
    name: "Ayuda",
    children: [
      {
        id: 1,
        name: "About",
        children: [
          { id: 1, name: "About v1", path: "/about-1" },
          { id: 2, name: "About v2", path: "/about-2" },
        ],
      },
      {
        id: 5,
        name: "404",
        path: "/not-found",
      },
      {
        id: 6,
        name: "Faq",
        path: "/faq",
      },
      {
        id: 7,
        name: "Help",
        path: "/help",
      },
      {
        id: 8,
        name: "Invoices",
        path: "/invoices",
      },
      {
        id: 9,
        name: "Login",
        path: "/login",
      },
      {
        id: 10,
        name: "Pricing",
        path: "/pricing",
      },
      {
        id: 11,
        name: "Terms",
        path: "/terms",
      },
      {
        id: 12,
        name: "UI Elements",
        path: "/ui-elements",
      },
    ],
  },
  {
    id: 5,
    name: "Contacto",
    path: "/contacto",
  },  
];

export default menus;
