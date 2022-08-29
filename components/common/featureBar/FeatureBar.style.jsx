import styled from 'styled-components'

export const Wrapper = styled.div`
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  position: fixed;
  bottom: 0;
  z-index: 30;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  padding: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
    skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
`
