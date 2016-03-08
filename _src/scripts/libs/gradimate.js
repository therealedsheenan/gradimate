export default class gradimate {
    constructor ( $target, $config ) {
        this.target = $target
        this.config = ( typeof $config !== 'undefined' ) ? $config : this.getDefaults()

        let initCSS = this.initCSS()
        let applyCSS = this.applyCSS()
    }

    getDefaults () {
        return {
            gradientType: 'linear-gradient',
            degrees: '270deg',
            colorPattern: ['#33f4c2','#31053c','#9dcf17'],
            backgroundSize: '600% 600%' ,
            effect: 'default'
        }
    }

    initCSS () {
        let css = '@-webkit-keyframes AnimationName{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}@-moz-keyframes AnimationName{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}@-o-keyframes AnimationName{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}@keyframes AnimationName{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style')

        style.type = 'text/css'

        if ( style.styleSheet ) style.styleSheet.cssText = css
        else style.appendChild( document.createTextNode( css ) )

        head.appendChild( style )
    }

    applyCSS () {
        let _config = this.config
        let _target = this.target
        let _colors = ''
        _config.colorPattern.map(( item ) => { _colors += `${ item },` })
        _colors = _colors.substring(0, _colors.length - 1);

        _target.style.background = `${ _config.gradientType }(${ _config.degrees }, ${ _colors })`
        _target.style.backgroundSize = `${ _config.backgroundSize }`
        _target.style.animation = 'AnimationName 10s ease infinite'
    }
}
