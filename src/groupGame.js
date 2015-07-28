define(
  function() {
    var GroupGame = function(data) {
      var self = this

      self.groupGameId = ko.observable()
      self.startDateTime = ko.observable()
      self.locationId = ko.observable()
      self.locationCity = ko.observable()
      self.teamOneId = ko.observable()
      self.teamOneName = ko.observable()
      self.teamOneFlag = ko.observable()
      self.teamTwoid = ko.observable()
      self.teamTwoName = ko.observable()
      self.teamTwoFlag = ko.observable()

      self.update(data)
    }

    GroupGame.prototype.update = function(data) {
      data = data || {}

      this.groupGameId(data.groupGameId||'')
      this.startDateTime(data.startDateTime||'')
      this.locationId(data.locationId||'')
      this.locationCity(data.locationCity||'')
      this.teamOneId(data.teamOneId||'')
      this.teamOneName(data.teamOneName||'')
      this.teamOneFlag(data.teamOneFlat||'')
      this.teamTwoId(data.teamTwoId||'')
      this.teamTwoName(data.teamTwoName||'')
      this.teamTwoFlag(data.teamTwoFlat||'')
    }

    return GroupGame
  }
)
