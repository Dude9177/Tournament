define(
  function() {
    var Location = function(data) {
      var self = this;

      self.id = ko.observable()
      self.city = ko.observable()
      self.stadiumName = ko.observable()
      self.stadiumCapacity = ko.observable()
      self.stadiumImage = ko.observable()

      self.update(data)
    }

    Location.prototype.update = function(data) {
      data = data || {}

      this.id(data.id || '')
      this.city(data.city || '')
      this.stadiumName(data.stadiumName || '')
      this.stadiumCapacity(data.stadiumCapacity || 0)
      this.stadiumImage(data.stadiumImage || '')
    }

    return Location
  }
)
