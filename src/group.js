define(
  function() {
    var Group = function(data) {
      var self = this

      self.groupId = ko.observable()
      self.name = ko.observable()

      self.groupTeams = ko.observableArray()

      self.update(data)
    }

    Group.prototype.update = function(data) {
      data = data || {}

      this.groupId(data.groupId || '')
      this.name(data.name || '')


    }

    return Group
  }
)
