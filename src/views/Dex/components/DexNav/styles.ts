import { ThemeUIStyleObject } from 'theme-ui'

export const styles: Record<string, ThemeUIStyleObject> = {
  // Token selector container
  dexNavContainer: {
    position: 'relative',
    width: '100%',
    height: '30px',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  navLinkContainer: {
    width: '100%',
    maxWidth: '225px',
    paddingRight: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  navIconContainer: {
    width: '100%',
    maxWidth: '60px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  navLink: {
    cursor: 'pointer',
    opacity: 0.2,
  },
}