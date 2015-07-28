define(
  function() {
    var PlayedGroupGame = function(data) {
      var self = this

      self.gameId = ko.observable()
      self.goalsShot = ko.observable()
      self.goalsGot = ko.observable()

      self.points = ko.pureComputed(function() {
        if (!(self.goalsShot() && self.goalsGot())) return null

        if (self.goalsShot() === self.goalsGot()) return 1

        return (self.goalsShot() > self.goalsGot()) ? 3 : 0
      })

      self.update(data)
    }

    PlayedGroupGame.prototype.update = function(data) {
      data = data || {}
    }

    return PlayedGroupGame
  }
)
