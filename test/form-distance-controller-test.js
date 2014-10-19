(function () {
    var assert = buster.assert;
    var refute = buster.refute;

    buster.testCase("form-distance-controller-test", {
        setUp: function () {
            var d = document.createElement('div');
            d.id = 'placeholderId';
            this.c = new bovan.formDistanceController(d);
        },

        "should have a placeholder object with an id": function () {
            var d = document.createElement('div');
            d.id = 'test';
            var c = new bovan.formDistanceController(d);
            assert.defined(c.container);
            assert.equals(c.container.id, d.id);
        },
        "injection of form elements": {
            setUp: function () {
                this.c.init();
            },
            "should inject 3 text input fields into placeholder on init": function () {
                var inputs = this.c.container.getElementsByTagName('input');
                assert.equals(inputs.length, 3);
            },
            "should create different ids for the input fields": function () {
                var inputs = this.c.container.getElementsByTagName('input');
                var a = inputs[0],
                    b = inputs[1],
                    c = inputs[2];
                refute.equals(a.id, b.id);
                refute.equals(b.id, c.id);
                refute.equals(c.id, a.id);
            }
        },

    });
}());