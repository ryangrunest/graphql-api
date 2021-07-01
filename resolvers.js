module.exports = {
  Query: {
    sessions(_, __, { dataSources }, info) {
      return dataSources.SessionAPI.getSessions();
    },
    sessionById(_, { id }, { dataSources }, info) {
      return dataSources.SessionAPI.getSessionById(id);
    },
    speakers(_, __, { dataSources }, info) {
      return dataSources.SpeakerAPI.getSpeakers();
    },
    speakerById(_, { id }, { dataSources }, info) {
      return dataSources.SpeakerAPI.getSpeakerById(id);
    },
  },
};
