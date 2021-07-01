module.exports = {
  async speakers(session, args, { dataSources }) {
    const speakers = await dataSources.SpeakerAPI.getSpeakers();
    const list = speakers.filter((speaker) => {
      return _.filter(session.speakers, { id: speaker.id }).length > 0;
    });

    return list;
  },
};
