import { css } from '@emotion/native'
import c from './theme.style'

export default button = {
  container: css`
    position: relative;
    display: flex;
  `,
  main: css`
    position: relative;
    background: ${c.red};
    padding: 12px 24px;
    border-radius: 8px;
  `,
  pressed: css`
    top: 2px;
  `,
  wall: css`
    position: absolute;
    background: ${c.redDark};
    padding: 12px 24px;
    border-radius: 8px;
    top: 5px;
  `,
  text: css`
    color: white;
    font-weight: 600;
  `
}
