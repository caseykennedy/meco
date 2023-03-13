import * as React from 'react'
import theme from '../../config/theme'

const Wiggles = () => (
  <svg width="100%" viewBox="0 0 340 374">
    <path
      d="M3.40039 1.5H1.90039V3V171V172.5H3.40039H37.7204H39.2204V171V66.4516L80.002 171.543L80.3735 172.5H81.4004H110.68H111.707L112.079 171.543L152.86 66.4516V171V172.5H154.36H188.68H190.18V171V3V1.5H188.68H142.36H141.312L140.952 2.48475L97.2183 122.054L52.0838 2.47032L51.7175 1.5H50.6804H3.40039ZM217.385 1.5H215.885V3V171V172.5H217.385H332.825H334.325V171V140.04V138.54H332.825H254.885V102.66H315.785H317.285V101.16V71.64V70.14H315.785H254.885V35.46H330.185H331.685V33.96V3V1.5H330.185H217.385ZM11.5084 239.87L11.5051 239.876C4.81778 252.924 1.5 268.127 1.5 285.44C1.5 302.754 4.81797 318.033 11.5017 331.237L11.5067 331.247L11.5119 331.257C18.3622 344.305 28.0825 354.438 40.6558 361.622L40.663 361.626C53.404 368.814 68.3066 372.38 85.32 372.38C98.6393 372.38 110.631 369.78 121.263 364.546C131.886 359.316 140.485 351.949 147.035 342.452C153.589 332.948 157.508 321.985 158.812 309.597L158.986 307.94H157.32H121.32H120.11L119.854 309.122C117.836 318.438 113.591 325.728 107.16 331.088C100.912 336.267 93.0292 338.9 83.4 338.9C70.3971 338.9 60.2066 334.054 52.6681 324.364C45.0784 314.449 41.22 301.517 41.22 285.44C41.22 269.196 45.0817 256.27 52.664 246.521C60.203 236.828 70.3947 231.98 83.4 231.98C93.0198 231.98 100.898 234.687 107.146 240.021L107.161 240.034L107.176 240.046C113.595 245.242 117.836 252.444 119.854 261.758L120.11 262.94H121.32H157.32H158.986L158.812 261.283C157.508 248.895 153.589 237.932 147.035 228.428C140.485 218.931 131.886 211.564 121.263 206.334C110.631 201.1 98.6393 198.5 85.32 198.5C68.3066 198.5 53.404 202.066 40.663 209.254L40.6558 209.258C28.0777 216.445 18.3572 226.661 11.5084 239.87ZM327.193 330.076L327.197 330.069C334.364 316.713 337.935 301.826 337.935 285.44C337.935 269.056 334.364 254.247 327.195 241.048C320.027 227.69 309.993 217.245 297.11 209.744C284.217 202.237 269.552 198.5 253.155 198.5C236.758 198.5 222.093 202.237 209.2 209.744C196.317 217.245 186.284 227.689 179.115 241.047C171.946 254.247 168.375 269.056 168.375 285.44C168.375 301.826 171.946 316.713 179.113 330.069L179.117 330.076C186.287 343.275 196.321 353.637 209.2 361.136C222.093 368.643 236.758 372.38 253.155 372.38C269.552 372.38 284.217 368.643 297.11 361.136C309.989 353.637 320.023 343.275 327.193 330.076ZM276.55 238.919L276.56 238.926L276.57 238.932C283.356 243.405 288.62 249.66 292.353 257.749C296.089 265.844 297.975 275.064 297.975 285.44C297.975 295.816 296.089 305.036 292.353 313.131C288.62 321.22 283.354 327.559 276.56 332.194C269.787 336.655 262.002 338.9 253.155 338.9C244.142 338.9 236.279 336.652 229.51 332.194C222.716 327.559 217.45 321.22 213.717 313.131C209.981 305.036 208.095 295.816 208.095 285.44C208.095 275.064 209.981 265.844 213.717 257.749C217.45 249.66 222.714 243.405 229.5 238.932L229.51 238.926L229.52 238.919C236.289 234.304 244.148 231.98 253.155 231.98C261.996 231.98 269.777 234.301 276.55 238.919Z"
      fill={theme.colors.background}
      stroke={theme.colors.secondary}
      stroke-width="3"
    />
  </svg>
)

export default Wiggles