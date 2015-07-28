define(
  function() {
    var PlayedGroupGame = function(data) {
      var self = this

      self.gameId = ko.observable()
      self.goalsShot = ko.observable()
      self.goalsGot = ko.observable()
      self.opponentId = ko.observable()
      
      self.hasResult = ko.pureComputed(function(){
        return self.goalsShot() && self.goalsGot()
      })

      self.points = ko.pureComputed(function() {
        if (!self.hasResult()) return null

        if (self.goalsShot() === self.goalsGot()) return 1

        return (self.goalsShot() > self.goalsGot()) ? 3 : 0
      })

      self.update(data)
    }

    PlayedGroupGame.prototype.update = function(data) {
      data = data || {}

      this.gameId(data.gameId || '')
      this.goalsShot(data.goalsShot || '')
      this.goalsGot(data.goalsGot || '')
    }

    return PlayedGroupGame
  }
)
