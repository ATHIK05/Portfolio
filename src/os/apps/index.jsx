import AboutApp from './AboutApp'
import ProjectsApp from './ProjectsApp'
import ExperienceApp from './ExperienceApp'
import SkillsApp from './SkillsApp'
import AwardsApp from './AwardsApp'
import CertsApp from './CertsApp'
import TerminalApp from './TerminalApp'
import MailApp from './MailApp'
import GalleryApp from './GalleryApp'

export const APPS = [
  { id: 'about', title: 'About This Dev', icon: '\ud83d\udc68\u200d\ud83d\udcbb', tint: '#7B61FF', size: { w: 620, h: 540 }, component: AboutApp },
  { id: 'projects', title: 'Projects', icon: '\ud83d\ude80', tint: '#00D4FF', size: { w: 820, h: 600 }, component: ProjectsApp },
  { id: 'experience', title: 'Experience', icon: '\ud83d\udcbc', tint: '#FF6B35', size: { w: 640, h: 560 }, component: ExperienceApp },
  { id: 'skills', title: 'Skills', icon: '\ud83d\udee0\ufe0f', tint: '#22C55E', size: { w: 680, h: 560 }, component: SkillsApp },
  { id: 'awards', title: 'Trophy Room', icon: '\ud83c\udfc6', tint: '#EAB308', size: { w: 700, h: 560 }, component: AwardsApp },
  { id: 'certs', title: 'Certifications', icon: '\ud83d\udcdc', tint: '#E879F9', size: { w: 640, h: 520 }, component: CertsApp },
  { id: 'gallery', title: 'Gallery', icon: '🖼️', tint: '#10B981', size: { w: 760, h: 560 }, component: GalleryApp },
  { id: 'terminal', title: 'Terminal', icon: '>_', tint: '#1A1A2E', size: { w: 680, h: 480 }, component: TerminalApp },
  { id: 'mail', title: 'Contact', icon: '\u2709\ufe0f', tint: '#3B82F6', size: { w: 560, h: 560 }, component: MailApp },
]

export const getApp = (id) => APPS.find((a) => a.id === id)

export function AppTile({ app, className = '' }) {
  return (
    <span
      className={`flex items-center justify-center rounded-2xl font-mono font-bold text-white ${className}`}
      style={{ background: `linear-gradient(135deg, ${app.tint}, ${app.tint}66)` }}
    >
      <span className="drop-shadow">{app.icon}</span>
    </span>
  )
}
