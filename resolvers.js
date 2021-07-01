const _ = require("lodash");

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
  Session: {
    async speakers(session, args, { dataSources }) {
      const speakers = await dataSources.SpeakerAPI.getSpeakers();
      const list = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });

      return list;
    },
  },
};
