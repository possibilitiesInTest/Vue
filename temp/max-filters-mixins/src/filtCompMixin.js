export const filtCompMixin = {
  data() {
    return {
      message1: "ShortMessage",
      message2: "LongerMessage"
    };
  },
  computed: {
    mixinLength: function() {
      return this.message1 + " " + "(" + this.message1.length + ")";
    }
  }
};
