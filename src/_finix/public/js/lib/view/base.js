const {dom} = require('../util');

const rootSelector = 'body';
const topbarTpl =
        `<div id="topbar">
            <div id="toolbar"></div>
            <div id="flowbar"></div>
            <a id="backlink" href="https://larsjung.de/finix/" title="powered by finix - https://larsjung.de/finix/">
                <div>powered</div>
                <div>by finix</div>
            </a>
        </div>`;
const mainrowTpl =
        `<div id="mainrow">
            <div id="content"></div>
        </div>`;

const init = () => {
    const $root = dom(rootSelector)
        .attr('id', 'root')
        .clr()
        .app(topbarTpl)
        .app(mainrowTpl);

    return {
        $root,
        $topbar: $root.find('#topbar'),
        $toolbar: $root.find('#toolbar'),
        $flowbar: $root.find('#flowbar'),
        $mainrow: $root.find('#mainrow'),
        $content: $root.find('#content')
    };
};

module.exports = init();