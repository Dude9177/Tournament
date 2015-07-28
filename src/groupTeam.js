define(
  function() {
    var GroupTeam = function(data) {
      var self = this

      self.groupTeamId = ko.observable()
      self.teamId = ko.observable()
      self.teamName = ko.observable()
      self.teamFlag = ko.observable()

      self.playedGroupGames = ko.observableArray()

      self.update(data)
    }

    GroupTeam.prototype.update = function(data) {
      data = data || {}

      this.groupTeamId(data.groupTeamId || '')
      this.teamId(data.teamId || '')
      this.teamName(data.teamName || '')
      this.teamFlag(data.teamFlag || '')
    }

    return GroupTeam
  }
)
