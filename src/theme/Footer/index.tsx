import React, {type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link'
import './styles.module.css'

function Footer(): ReactNode {
    const {footer} = useThemeConfig();
    if (!footer) {
        return null;
    }

    return (
        <footer>
            <div className="container container--fluid margin-top--lg">
                <small style={{fontSize: '9.6px'}} >
                    <p>
                        All opinions expressed on this site are solely those of the author and do not reflect
                        the views or positions of the author's current or any previous employers.
                        All quoted or referenced content remains the intellectual property of the original
                        authors.
                        Please{' '}
                        <Link
                            to="mailto:i@carolyn.sh?subject=[Copyright%20Issue]"
                            style={{textDecoration: 'underline'}}
                        >
                            contact me
                        </Link>{' '}
                        if any content is improperly cited.
                        Except where otherwise noted, content on this site is licensed under a{' '}
                        <Link
                            to="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
                            target="_blank"
                            rel="license noopener noreferrer"
                            style={{textDecoration: 'underline'}}
                        >
                            Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license
                        </Link>.
                        <br/>
                        本网站所载内容仅代表作者本人观点，不代表其现任或任何前任雇主之立场，所引用之内容及其版权归原作者所有，若有不当引用请
                        <Link
                            to="mailto:i@carolyn.sh?subject=[版权问题]"
                            style={{textDecoration: 'underline'}}
                        >
                            联系我
                        </Link>
                        删除。
                        除非另有说明，本网站的内容均采用
                        <Link
                            to="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans"
                            target="_blank"
                            rel="license noopener noreferrer"
                            style={{textDecoration: 'underline'}}
                        >
                            署名—非商业性使用—禁止演绎 4.0 协议国际版
                        </Link>
                        进行许可。
                        <br />
                        Copyright © 2025 Carolyn Sun
                    </p>
                </small>
            </div>
        </footer>
    );
}

export default React.memo(Footer);
