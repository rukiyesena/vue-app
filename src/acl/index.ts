import { ROLE_PERMISSIONS } from './roles'

export function computePermissionsFromRoles(roles: string[]): string[] {
  const set = new Set<string>()
  roles.forEach(r => (ROLE_PERMISSIONS[r] || []).forEach(p => set.add(p)))
  return [...set]
}

export const hasAny = (userSet: string[], required?: string[] | string) => {
  if (!required || (Array.isArray(required) && required.length === 0)) return true
  const req = Array.isArray(required) ? required : [required]
  return req.some(r => userSet.includes(r))
}

export const hasAll = (userSet: string[], required?: string[] | string) => {
  if (!required || (Array.isArray(required) && required.length === 0)) return true
  const req = Array.isArray(required) ? required : [required]
  return req.every(r => userSet.includes(r))
}
