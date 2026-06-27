import { useEffect, useRef, useState } from 'react'
import {
  profile,
  introduce,
  highlights,
  experience,
  project,
  sideProject,
  skill,
  education,
  certificate,
} from './data/resume.js'

/* =============================================================
   날짜 유틸 (원본 Util.ts 의 luxon 로직을 순수 JS로 구현)
   ============================================================= */
function parseYM(s) {
  const [y, m] = s.split('-').map((x) => parseInt(x, 10))
  return { y, m }
}
function nowYM() {
  const d = new Date()
  return { y: d.getFullYear(), m: d.getMonth() + 1 }
}
function fmtYM(s) {
  const { y, m } = parseYM(s)
  return `${y}. ${String(m).padStart(2, '0')}`
}
function fmtRange(startedAt, endedAt) {
  const start = fmtYM(startedAt)
  return endedAt ? `${start} ~ ${fmtYM(endedAt)}` : `${start} ~`
}
// 재직기간: 종료월 +1개월 (원본과 동일)
function monthsPlusOne(start, end) {
  return (end.y - start.y) * 12 + (end.m - start.m) + 1
}
function fmtDurationMonths(total) {
  const years = Math.floor(total / 12)
  const months = total % 12
  if (years > 0 && months === 0) return `${years}년`
  if (years === 0 && months > 0) return `${months}개월`
  return `${years}년 ${months}개월`
}

/* =============================================================
   아이콘 (Font Awesome 경로 인라인)
   ============================================================= */
const FA = {
  envelope: ['0 0 512 512', 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'],
  phone: ['0 0 512 512', 'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'],
  pen: ['0 0 512 512', 'M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z'],
  github: ['0 0 496 512', 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z'],
  bell: ['0 0 448 512', 'M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z'],
  print: ['0 0 512 512', 'M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z'],
}
function Icon({ name, className, style }) {
  const [viewBox, d] = FA[name] || FA.envelope
  return (
    <svg aria-hidden="true" className={className} role="img" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} style={style} width="1em" height="1em">
      <path fill="currentColor" d={d} />
    </svg>
  )
}

/* =============================================================
   공통: 섹션 페이드인 / Section heading
   ============================================================= */
function SectionAnimate({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); ob.unobserve(el) }
    }, { threshold: 0.1 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className="section-animate" style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(12px)',
      transition: 'opacity var(--transition-enter), transform var(--transition-enter)',
    }}>{children}</div>
  )
}

function CommonSection({ title, children }) {
  const id = `section-${title.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <SectionAnimate>
      <section className="editorial-section" aria-labelledby={id}>
        <h2 id={id} className="section-heading">{title}</h2>
        {children}
      </section>
    </SectionAnimate>
  )
}

/* =============================================================
   공통: 설명 리스트 (중첩 재귀)
   ============================================================= */
const FW = { DEFAULT: 300, THIN: 100, EXTRA_LIGHT: 200, LIGHT: 300, REGULAR: 400, MEDIUM: 500, SEMI_BOLD: 600, BOLD: 700, EXTRA_BOLD: 800, BLACK: 900 }
function Anchor({ url, text }) {
  return <a href={url} target="_blank" rel="noreferrer noopener">{text || url}</a>
}
function Description({ d }) {
  return (
    <li style={d.weight ? { fontWeight: FW[d.weight] } : {}}>
      {d.href ? <Anchor url={d.href} text={d.content} /> : d.content}
      {d.postHref && <>{' '}<Anchor url={d.postHref} text={d.postHref} /></>}
    </li>
  )
}
function DescriptionList({ descriptions, padding, nested }) {
  if (!descriptions) return null
  const Tag = 'ul'
  return (
    <Tag className={!nested && padding ? 'description-list--padded' : ''}>
      {descriptions.map((d, i) => (
        <span key={i} style={{ display: 'contents' }}>
          <Description d={d} />
          {d.descriptions && <DescriptionList descriptions={d.descriptions} nested />}
        </span>
      ))}
    </Tag>
  )
}

/* CommonRows: split-row (날짜 | 제목/부제/설명) */
function CommonRow({ row, index }) {
  const padding = !!(row.title || row.subTitle)
  return (
    <div>
      {index > 0 && <hr />}
      <div className="split-row">
        <div className="split-left">
          <h4 className="experience-period">{row.left}</h4>
          {row.leftSub && <div>{row.leftSub}</div>}
        </div>
        <div>
          {row.title && <h4>{row.title}</h4>}
          {row.subTitle && <i className="experience-position-title">{row.subTitle}</i>}
          {row.descriptions && <DescriptionList descriptions={row.descriptions} padding={padding} />}
        </div>
      </div>
    </div>
  )
}

/* =============================================================
   Profile
   ============================================================= */
function ProfileContact({ c }) {
  const isBadge = c.badge
  return (
    <span className="profile-contact-item">
      <Icon name={c.icon} style={{ marginRight: 'var(--space-xs)' }} />
      {isBadge ? <span className="tag">{c.title}</span>
        : c.link ? <Anchor url={c.link} text={c.title} /> : <span>{c.title}</span>}
    </span>
  )
}
function Profile() {
  return (
    <div className="profile-section">
      <div className="profile-identity">
        {profile.image && (
          <div className="profile-image-wrap">
            <img className="profile-image" src={profile.image} alt={profile.name.title} />
          </div>
        )}
        <div className="profile-identity-text">
          <h1 className="profile-name">
            {profile.name.title} {profile.name.small && <small>{profile.name.small}</small>}
          </h1>
          {profile.tagline && <p className="profile-tagline">{profile.tagline}</p>}
          <div className="profile-contacts">
            {profile.contacts.map((c, i) => <ProfileContact key={i} c={c} />)}
          </div>
        </div>
      </div>

      {profile.notice && (
        <div className="notice-banner">
          {profile.notice.icon && <Icon name={profile.notice.icon} className="notice-icon" />}
          {profile.notice.title}
        </div>
      )}

      {profile.headings && profile.headings.length > 0 && (
        <div className="profile-stats-band">
          <div className="stats-grid profile-stats">
            {profile.headings.map((h, i) => (
              <div key={i} className="profile-stat-item">
                <div className="profile-stat-value">{h.value}</div>
                <div className="profile-stat-label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* =============================================================
   Introduce
   ============================================================= */
function Introduce() {
  const lu = new Date(introduce.latestUpdated)
  const dplus = Math.max(0, Math.floor((Date.now() - lu.getTime()) / 86400000))
  const luFmt = `${lu.getFullYear()}. ${String(lu.getMonth() + 1).padStart(2, '0')}. ${String(lu.getDate()).padStart(2, '0')}`
  return (
    <SectionAnimate>
      <section className="editorial-section" aria-labelledby="section-introduce">
        <h2 id="section-introduce" className="section-heading">INTRODUCE</h2>
        <div>
          {introduce.contents.map((c, i) => <p key={i}>{c}</p>)}
          <p className="text-end">
            <small>Latest Updated</small>{' '}
            <span className="tag tag--muted">{`${luFmt} (D+${dplus})`}</span>
          </p>
          <p className="text-end" style={{ fontFamily: 'var(--font-signature)', fontSize: '1.6em', fontWeight: 300 }}>
            {introduce.sign}
          </p>
        </div>
      </section>
    </SectionAnimate>
  )
}

/* =============================================================
   Highlights
   ============================================================= */
function Highlights() {
  return (
    <div className="editorial-section">
      <div className="card-grid-3">
        {highlights.map((h, i) => (
          <div className="highlight-card" key={i}>
            <div className="highlight-title">{h.title}</div>
            <div className="highlight-description">{h.description}</div>
            {h.keywords && h.keywords.length > 0 && (
              <div className="highlight-keywords">
                {h.keywords.map((k, j) => <span key={j} className="tag tag--accent">{k}</span>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* =============================================================
   Experience
   ============================================================= */
function totalExperience() {
  let total = 0
  experience.list.forEach((item) => {
    const starts = item.positions.map((p) => parseYM(p.startedAt))
    const ends = item.positions.map((p) => (p.endedAt ? parseYM(p.endedAt) : nowYM()))
    const minStart = starts.reduce((a, b) => (a.y * 12 + a.m <= b.y * 12 + b.m ? a : b))
    const maxEnd = ends.reduce((a, b) => (a.y * 12 + a.m >= b.y * 12 + b.m ? a : b))
    total += monthsPlusOne(minStart, maxEnd)
  })
  return fmtDurationMonths(total)
}
function ExperienceRow({ item, index }) {
  const positions = item.positions
    .map((p) => ({ ...p, s: parseYM(p.startedAt), e: p.endedAt ? parseYM(p.endedAt) : null, isCurrent: !p.endedAt }))
    .sort((a, b) => (b.s.y * 12 + b.s.m) - (a.s.y * 12 + a.s.m))
  const minStart = positions.reduce((a, b) => (a.s.y * 12 + a.s.m <= b.s.y * 12 + b.s.m ? a : b)).s
  const isCurrent = positions.some((p) => p.isCurrent)
  const ends = positions.map((p) => (p.isCurrent ? nowYM() : p.e))
  const maxEnd = ends.reduce((a, b) => (a.y * 12 + a.m >= b.y * 12 + b.m ? a : b))
  const duration = fmtDurationMonths(monthsPlusOne(minStart, maxEnd))
  const periodTitle = isCurrent ? `${fmtYM(positions[positions.length - 1].startedAt)} ~`
    : fmtRange(positions[positions.length - 1].startedAt, `${maxEnd.y}-${String(maxEnd.m).padStart(2, '0')}`)
  const multi = positions.length > 1
  return (
    <div className="experience-item">
      {index > 0 && <hr />}
      <div className="split-row">
        <div className="split-left"><h4 className="experience-period">{periodTitle}</h4></div>
        <div>
          <h4 className="experience-company-heading">
            <span className={`experience-dot ${isCurrent ? 'is-current' : ''}`} />
            {item.title}{' '}
            <span className="experience-meta">
              {isCurrent && <span className="tag tag--success">재직 중</span>}
              <span className="tag tag--accent">{duration}</span>
            </span>
          </h4>
        </div>
      </div>
      {positions.map((p, i) => (
        <div key={i} className="split-row experience-position-row">
          <div className="split-left">
            {multi && <span className="experience-position-period">{fmtRange(p.startedAt, p.endedAt)}</span>}
          </div>
          <div>
            <i className="experience-position-title">{p.title}</i>
            {p.location && <span className="experience-position-location">{p.location}</span>}
            <ul className="experience-description-list">
              {p.descriptions && p.descriptions.map((d, j) => <li key={j}>{d.content}</li>)}
              {p.skillKeywords && (
                <li>
                  <strong>Skill Keywords</strong>
                  <div className="experience-keywords">
                    {p.skillKeywords.map((k, j) => <span key={j} className="tag tag--accent">{k}</span>)}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
function Experience() {
  return (
    <CommonSection title="EXPERIENCE">
      <div className="split-row experience-summary-row">
        <div className="split-left"><span className="experience-summary-label">TOTAL</span></div>
        <div className="experience-total-period">
          <span className="tag tag--muted">{`총 ${totalExperience()}`}</span>
        </div>
      </div>
      {experience.list.map((item, i) => <ExperienceRow key={i} item={item} index={i} />)}
    </CommonSection>
  )
}

/* =============================================================
   Project
   ============================================================= */
function Project() {
  return (
    <CommonSection title="PROJECT">
      <div>
        {project.list.map((p, i) => (
          <CommonRow key={i} index={i} row={{
            left: fmtRange(p.startedAt, p.endedAt),
            title: p.title,
            subTitle: p.where,
            descriptions: p.descriptions,
          }} />
        ))}
      </div>
    </CommonSection>
  )
}

function SideProject() {
  if (!sideProject.list.length) return null
  return (
    <CommonSection title="SIDE PROJECT">
      <div>
        {sideProject.list.map((p, i) => (
          <CommonRow key={i} index={i} row={{
            left: fmtRange(p.startedAt, p.endedAt),
            title: p.title,
            subTitle: p.where,
            descriptions: p.descriptions,
          }} />
        ))}
      </div>
    </CommonSection>
  )
}

/* =============================================================
   Skill
   ============================================================= */
function Skill() {
  return (
    <CommonSection title="SKILL">
      {skill.skills.map((s, i) => (
        <div key={i}>
          {i > 0 && <hr />}
          <div className="split-row">
            <div className="split-left"><h4 className="skill-category">{s.category}</h4></div>
            <div>
              <ul className="skill-chip-list">
                {s.items.map((it, j) => (
                  <li key={j} className="skill-chip-item">
                    <span className="skill-chip-title">{it.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </CommonSection>
  )
}

/* =============================================================
   Education / Certificate
   ============================================================= */
function RowsSection({ title, list }) {
  return (
    <CommonSection title={title}>
      <div className="rows-single-date">
        {list.map((r, i) => <CommonRow key={i} index={i} row={r} />)}
      </div>
    </CommonSection>
  )
}

/* =============================================================
   Floating Nav (데스크탑)
   ============================================================= */
function FloatingNav() {
  const [items, setItems] = useState([])
  const [activeId, setActiveId] = useState('')
  const [visible, setVisible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)')
    const on = () => setIsDesktop(mq.matches)
    on(); mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  useEffect(() => {
    const secs = document.querySelectorAll('section[aria-labelledby]')
    const list = []
    secs.forEach((s) => {
      const id = s.getAttribute('aria-labelledby')
      const h = id && document.getElementById(id)
      if (h) list.push({ id, title: h.textContent || '' })
    })
    setItems(list)
  }, [])

  useEffect(() => {
    if (!isDesktop || items.length === 0) return
    const headings = items.map((it) => document.getElementById(it.id)).filter(Boolean)
    const onScroll = () => {
      setVisible(window.scrollY > 300)
      const passed = []
      headings.forEach((h) => {
        const top = h.getBoundingClientRect().top
        if (top <= 24) passed.push({ id: h.id, top })
      })
      if (passed.length) { passed.sort((a, b) => b.top - a.top); setActiveId(passed[0].id) }
      else setActiveId(headings[0]?.id || items[0].id)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [isDesktop, items])

  if (!isDesktop || items.length === 0) return null
  return (
    <nav className="floating-nav" aria-label="Section navigation"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}>
      <ul className="floating-nav-list">
        {items.map((it) => (
          <li className="floating-nav-item" key={it.id}>
            <button
              className={`floating-nav-button ${activeId === it.id ? 'is-active' : ''}`}
              onClick={() => document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >{it.title}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/* =============================================================
   다크모드 / 인쇄
   ============================================================= */
function Controls() {
  const [dark, setDark] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) {}
  }, [dark])
  return (
    <>
      <button type="button" aria-label="다크 모드로 전환" className="dark-mode-toggle" onClick={() => setDark((v) => !v)}>
        {dark ? '☀️' : '🌙'}
      </button>
      <button type="button" aria-label="인쇄 / PDF 저장" className="print-button" onClick={() => window.print()}>
        <Icon name="print" />
      </button>
    </>
  )
}

/* =============================================================
   App
   ============================================================= */
export default function App() {
  return (
    <>
      <FloatingNav />
      <Controls />
      <main>
        <div className="resume-container">
          <Profile />
          <Introduce />
          <Highlights />
          <Experience />
          <Project />
          <SideProject />
          <Skill />
          <RowsSection title="EDUCATION" list={education.list} />
          <RowsSection title="CERTIFICATE" list={certificate.list} />
        </div>
      </main>
      <footer className="resume-footer">
        <small>© {new Date().getFullYear()} {profile.name.title} · Built with React + Vite</small>
      </footer>
    </>
  )
}
