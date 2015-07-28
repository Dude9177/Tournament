define(
  function() {
    var GroupTeam = function(data) {
      var self = this

      self.groupTeamId = ko.observable()
      self.teamId = ko.observable()
      self.teamName = ko.observable()
      self.teamFlag = ko.observable()

      self.ordinal = ko.observable()

      self.playedGroupGames = ko.observableArray()

      self.point = ko.pureComputed(function() {
        var playedGroupGames = self.playedGroupGames()

        return Lazy(playedGroupGames)
          .where(function(item) {
            return item.hasResult()
          })
          .pluck('points')
          .map(function(item) {
            return item()
          })
          .sum()
      })

      self.update(data)
    }

    GroupTeam.prototype.update = function(data) {
      data = data || {}

      this.groupTeamId(data.groupTeamId || '')
      this.teamId(data.teamId || '')
      this.teamName(data.teamName || '')
      this.teamFlag(data.teamFlag || '')

      this.ordinal(data.ordianl || 0)
    }

    return GroupTeam
  }
)
