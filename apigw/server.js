const { ApolloServer, AuthenticationError } = require('apollo-server');
const axios = require('axios'); 

const typeDefs = `
  type Query {
    service1: [String]
    service2: [String]
    service3: [String]
    service4: [String]
    service5: [String]
    service6: [String]
    service7: [String]
  }
`;

const resolvers = {
  Query: {
    service1: async (parent, args, context, info) => {
      console.log(context.token);
      try {
          const response = await axios.get('http://bebidas:7000/bebidas');
          const data = response.data;
          return [...data.bebidas];
      } catch (err) {
          console.error("Error al obtener datos de bebidas", err);
          return [];
      }
  },

    service2: async (parent, args, context, info) => {
        console.log(context.token);
        try {
            const response = await axios.get('http://cereales:8080/cereales');
            const data = response.data;
            return [...data.cereales];
        } catch (err) {
            console.error("Error al obtener datos de cereales", err);
            return [];
        }
    },

    service3: async (parent, args, context, info) => {
        console.log(context.token);
        try {
            const response = await axios.get('http://dulces:6000/dulces');
            const data = response.data;
            return [...data.dulces];
        } catch (err) {
            console.error("Error al obtener datos de dulces", err);
            return [];
        }
    },

    service4: async (parent, args, context, info) => {
        console.log(context.token);
        try {
            const response = await axios.get('http://frutas:4000/frutas');
            const data = response.data;
            return [...data.frutas];
        } catch (err) {
            console.error("Error al obtener datos de frutas", err);
            return [];
        }
    },

    service5: async (parent, args, context, info) => {
        console.log(context.token);
        try {
            const response = await axios.get('http://micro-manis:8000/manis');
            const data = response.data;
            return [...data.manis];
        } catch (err) {
            console.error("Error al obtener datos de manis", err);
            return [];
        }
    },

    service6: async (parent, args, context, info) => {
        console.log(context.token);
        try {
            const response = await axios.get('http://quesos:9000/quesos');
            const data = response.data;
            return [...data.quesos];
        } catch (err) {
            console.error("Error al obtener datos de quesos", err);
            return [];
        }
    },

    service7: async (parent, args, context, info) => {
        console.log(context.token);
        try {
            const response = await axios.get('http://vegetales:3080/vegetales');
            const data = response.data;
            return [...data.vegetales];
        } catch (err) {
            console.error("Error al obtener datos de vegetales", err);
            return [];
        }
    },
 },
};

async function getContext({ req }) {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.split('Bearer ')[1];

    try {
        const response = await axios.post('http://authservice:3000/verify-token', { token: token });
        console.log(response.data)
        if (response.data && response.data.isValid) {
            return { token };
        } else {
            throw new AuthenticationError("No estás autorizado");
        }
    } catch (err) {
        throw new AuthenticationError("Error al validar el token");
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: getContext
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
