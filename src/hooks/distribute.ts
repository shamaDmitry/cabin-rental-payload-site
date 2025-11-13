/**
 * @param rooms Number of rooms to book
 * @param adults Total number of adults to distribute across rooms
 * @param seniors Total number of seniors to distribute across rooms
 * @param children Total number of children to distribute across rooms
 * @return An array of Room objects, where each object contains the
 * number of each type of occupant in the room
 */

interface Room {
  adults: number
  seniors: number
  children: number
}

export function distribute(
  rooms: number,
  adults: number,
  seniors: number,
  children: number,
): Room[] {
  const total = adults + seniors + children
  const capacity = rooms * 4

  // --- Feasibility checks ---
  if (total > capacity) return []
  // if (total < rooms) return []
  // if (adults + seniors < rooms) return [] // every room needs at least one adult/senior

  const result: Room[] = Array.from({ length: rooms }, () => ({
    adults: 0,
    seniors: 0,
    children: 0,
  }))

  let a = adults
  let s = seniors
  let c = children

  // STEP 1: seed each room with at least one adult/senior
  for (let i = 0; i < rooms; i++) {
    if (a > 0) {
      result[i].adults++
      a--
    } else if (s > 0) {
      result[i].seniors++
      s--
    } else {
      return [] // should never happen because adults+seniors >= rooms
    }
  }

  // STEP 2: cluster remaining seniors with other seniors if possible
  for (let i = 0; i < rooms && s > 0; i++) {
    const r = result[i]
    const free = 4 - (r.adults + r.seniors + r.children)
    const add = Math.min(free, s)
    r.seniors += add
    s -= add
  }

  // STEP 3: distribute remaining adults evenly into rooms with space
  while (a > 0) {
    const candidates = result
      .map((r, i) => ({ i, occ: r.adults + r.seniors + r.children }))
      .filter((r) => r.occ < 4)
      .sort((a, b) => a.occ - b.occ)
    if (candidates.length === 0) break
    const i = candidates[0].i
    result[i].adults++
    a--
  }

  // STEP 4: distribute children — only in rooms with adult/senior and space
  while (c > 0) {
    const candidates = result
      .map((r, i) => ({ i, occ: r.adults + r.seniors + r.children }))
      .filter((r) => result[r.i].adults + result[r.i].seniors > 0 && r.occ < 4)
      .sort((a, b) => a.occ - b.occ)
    if (candidates.length === 0) return []
    const i = candidates[0].i
    result[i].children++
    c--
  }

  // --- Final validation ---
  for (const r of result) {
    const total = r.adults + r.seniors + r.children
    if (total === 0 || total > 4) return []
    if (r.children > 0 && r.adults + r.seniors === 0) return [] // children not alone
  }

  // STEP 5: sort by adults desc, seniors desc, children desc
  result.sort((a, b) => {
    if (b.adults !== a.adults) return b.adults - a.adults
    if (b.seniors !== a.seniors) return b.seniors - a.seniors
    return b.children - a.children
  })

  return result
}
