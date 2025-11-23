export const ROLE = {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER',
} as const

export const PERM = {
  USER_READ: 'user.read',
  USER_WRITE: 'user.write',
  DASHBOARD_VIEW: 'dashboard.view',
} as const

export const ROLE_PERMISSIONS: Record<string, string[]> = {
  [ROLE.ADMIN]: [PERM.USER_READ, PERM.USER_WRITE, PERM.DASHBOARD_VIEW],
  [ROLE.EDITOR]: [PERM.USER_READ, PERM.DASHBOARD_VIEW],
  [ROLE.VIEWER]: [PERM.USER_READ, PERM.DASHBOARD_VIEW],
}
