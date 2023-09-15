const {Values}= require('../models')

const resolvers = {
    Query:{
        values: async () =>{
            try {
                const allValues = await Values.find();
                return allValues;
            } catch (error){
                throw new Error("Error fetching users");
            }
        }

    }
};

module.exports = resolvers;