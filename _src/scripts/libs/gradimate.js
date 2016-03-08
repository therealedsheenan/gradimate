export default class gradimate {
    constructor ( $target, $config ) {
        this.target = $target
        this.config = ( typeof $config !== 'undefined' ) ? $config : this.getDefaults()

        let renderCSS = this.renderCSS()
    }

    getDefaults () {
        return {
            gradientType: 'linear-gradient',
            degrees: '270deg',
            colorPattern: [
                '#33f4c2',
                '#31053c',
                '#9dcf17'
            ],
            backgroundSize: '600% 600%',
            duration: '10s'
        }
    }

    renderCSS () {
        let css = '@-webkit-keyframes AnimationName{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}@-moz-keyframes AnimationName{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}@-o-keyframes AnimationName{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}@keyframes AnimationName{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style')

        style.type = 'text/css'

        if ( style.styleSheet ) style.styleSheet.cssText = css
        else style.appendChild( document.createTextNode( css ) )

        head.appendChild( style )
    }
}
