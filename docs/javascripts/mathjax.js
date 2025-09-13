window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  svg: {
    fontCache: "global"
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  startup: {
    ready() {
      // var CHTMLmath = MathJax._.output.chtml.Wrappers.math.CHTMLmath;
      MathJax.startup.defaultReady();
    }
  }
};

document$.subscribe(function () {
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
});
