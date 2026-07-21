import { Braces, Database, Server, Users } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'

type Props = { name: string; className?: string }

export function TechIcon({ name, className = 'h-7 w-7' }: Props) {
  switch (name) {
    case 'java':
      return (
        <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
          <path
            fill="#0074BD"
            d="M47.6 98.7s-3.8 2.2 2.7 3c7.9.9 12 .8 20.7-.9 0 0 2.3 1.4 5.5 2.7-19.6 8.4-44.4-.5-28.9-4.8zM45.2 87.8s-4.3 3.2 2.3 3.8c8.5.8 15.2.9 26.7-1.4 0 0 1.6 1.6 4.1 2.5-23.7 6.9-50.1.5-33.1-4.9z"
          />
          <path
            fill="#EA2D2E"
            d="M65.5 69.3c4.8 5.5-1.3 10.5-1.3 10.5s12.3-6.4 6.7-14.3c-5.3-7.4-9.3-11.1 12.6-23.8 0 0-34.4 8.6-18 27.6z"
          />
          <path
            fill="#0074BD"
            d="M92.1 106.8s2.8 2.3-3.1 4.1c-11.1 3.4-46.3 4.4-56.1.1-3.5-1.5 3.1-3.7 5.2-4.1 2.2-.5 3.4-.4 3.4-.4-3.9-2.8-25.5 5.5-11 7.8 39.7 6.5 72.4-2.9 61.6-7.5zM49.4 76.5s-18.1 4.3-6.4 5.9c4.9.7 14.8.5 24-.3 7.5-.6 15-2 15-2s-2.6 1.1-4.5 2.4c-18.4 4.8-53.9 2.6-43.7-2.4 8.7-4.1 15.6-3.5 15.6-3.5zM81.9 94.7c18.7-9.7 10-19.1 4-17.8-1.5.3-2.2.6-2.2.6s.6-.9 1.7-1.3c12.5-4.4 22.1 12.9-3.8 19 0 0 .2-.3.3-.5z"
          />
          <path
            fill="#EA2D2E"
            d="M71 .5s10.4 10.4-9.8 26.4c-16.2 12.8-3.7 20.2 0 28.6-9.5-8.5-16.4-16-11.8-23 6.8-10.3 25.6-15.3 21.6-32z"
          />
          <path
            fill="#0074BD"
            d="M51.2 123.3c17.9 1.2 45.5-.6 46.2-9.1 0 0-1.3 3.2-14.9 5.8-15.3 2.9-34.2 2.5-45.4.7 0 .1 2.4 1.9 14.1 2.6z"
          />
        </svg>
      )
    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
          <path
            fill="#3776AB"
            d="M63.4 1.5c-5.3 0-10.3.5-14.8 1.3-13 2.3-15.4 7.1-15.4 16v11.7h30.8v3.9H21.4c-9 0-16.9 5.4-19.3 15.7-2.8 11.8-3 19.1 0 31.4 2.2 9.2 7.4 15.7 16.4 15.7h10.6V102c0-10.2 8.8-19.2 19.3-19.2h30.8c8.6 0 15.4-7.1 15.4-15.7V18.8c0-8.4-7.1-14.7-15.4-16.1-5.2-.8-10.6-1.2-15.8-1.2zM46.7 11c3.2 0 5.8 2.6 5.8 5.9 0 3.2-2.6 5.8-5.8 5.8-3.2 0-5.8-2.6-5.8-5.8 0-3.3 2.6-5.9 5.8-5.9z"
          />
          <path
            fill="#FFDC41"
            d="M96.5 34.5v11.3c0 10.7-9 19.6-19.3 19.6H46.4c-8.4 0-15.4 7.2-15.4 15.7v29.4c0 8.4 7.3 13.3 15.4 15.7 9.8 2.9 19.1 3.4 30.8 0 7.8-2.3 15.4-6.8 15.4-15.7V98.8H61.9v-3.9h46.2c9 0 12.3-6.2 15.4-15.7 3.2-9.7 3.1-19 0-31.4-2.2-9-6.4-15.7-15.4-15.7H96.5zM79.2 105.3c3.2 0 5.8 2.6 5.8 5.8 0 3.3-2.6 5.9-5.8 5.9-3.2 0-5.8-2.6-5.8-5.9 0-3.2 2.6-5.8 5.8-5.8z"
          />
        </svg>
      )
    case 'php':
      return (
        <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
          <ellipse fill="#8892BF" cx="64" cy="64" rx="62" ry="34" />
          <path
            fill="#fff"
            d="M23 52h9.6c2.8 0 4.8.8 6 2.3 1.2 1.5 1.6 3.6 1.1 6.2-.5 2.8-1.6 4.8-3.2 6.1-1.6 1.3-4 1.9-7.1 1.9h-4.1L23.9 76H19l4-24zm3.3 4l-1.7 9.4h3.3c2 0 3.5-.4 4.5-1.2 1-.8 1.6-2.1 2-4 .3-1.8.1-3-.6-3.7-.7-.7-2.1-1-4.1-1h-3.4v.5zM47 45h4.8l-1.4 7h4.3c2.9 0 4.9.5 6 1.5 1.1 1 1.4 2.7 1 4.9L59.5 76h-4.9l2.1-11.8c.2-1.2.1-2-.3-2.5s-1.3-.7-2.6-.7h-3.9L47.4 76h-4.8L47 45zM72 52h9.6c2.8 0 4.8.8 6 2.3 1.2 1.5 1.6 3.6 1.1 6.2-.5 2.8-1.6 4.8-3.2 6.1-1.6 1.3-4 1.9-7.1 1.9h-4.1L72.9 76H68l4-24zm3.3 4l-1.7 9.4h3.3c2 0 3.5-.4 4.5-1.2 1-.8 1.6-2.1 2-4 .3-1.8.1-3-.6-3.7-.7-.7-2.1-1-4.1-1h-3.4v.5z"
          />
        </svg>
      )
    case 'mysql':
      return <Database className={className} aria-hidden="true" style={{ color: '#00758F' }} />
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23 23 20.46" className={className} aria-hidden="true">
          <circle r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    case 'javascript':
      return (
        <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
          <rect width="128" height="128" fill="#F0DB4F" rx="6" />
          <path
            fill="#323330"
            d="M67 106c2.6 4.3 6 7.4 12 7.4 5 0 8.3-2.5 8.3-6 0-4.1-3.3-5.6-8.8-8l-3-1.3c-8.7-3.7-14.5-8.3-14.5-18.1 0-9 6.9-15.9 17.6-15.9 7.7 0 13.2 2.7 17.2 9.7l-9.4 6c-2-3.7-4.3-5.2-7.8-5.2-3.6 0-5.9 2.3-5.9 5.2 0 3.6 2.3 5.1 7.5 7.4l3 1.3c10.3 4.4 16 8.8 16 18.9 0 10.8-8.5 16.7-19.9 16.7-11.1 0-18.3-5.3-21.8-12.2L67 106zm-42.4 1c1.9 3.4 3.7 6.3 7.9 6.3 4 0 6.6-1.6 6.6-7.8V63.3h12v42.4c0 12.9-7.6 18.8-18.6 18.8-10 0-15.8-5.2-18.7-11.4L24.6 107z"
          />
        </svg>
      )
    case 'html5':
      return (
        <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
          <path fill="#E44D26" d="M19.4 116.6L9 0h110l-10.4 116.6L63.9 128z" />
          <path fill="#F16529" d="M64 118.3l36.1-10L109 9.2H64z" />
          <path
            fill="#EBEBEB"
            d="M64 52.5H45.9l-1.2-14h19.3V25H29.9l4.1 41h30zM64 87.9l-15.1-4.1-1-10.8H34.1l1.9 21.2 28 7.8z"
          />
          <path
            fill="#fff"
            d="M63.9 52.5v13.9h16.8l-1.6 17.6-15.2 4.1v14.5l28-7.7 3.4-42.4zM63.9 25v13.5h33l1.1-13.5z"
          />
        </svg>
      )
    case 'css3':
      return (
        <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
          <path fill="#1572B6" d="M19.4 116.6L9 0h110l-10.4 116.6L63.9 128z" />
          <path fill="#33A9DC" d="M64 118.3l36.1-10L109 9.2H64z" />
          <path
            fill="#fff"
            d="M64 52.5h18l1.2-14H64V25h34l-.3 3.7-3.4 38.3H64zm0 35.4l15.1-4.1 2-22.8H64V75h13.7l-1.3 14.1L64 92.7z"
          />
          <path
            fill="#EBEBEB"
            d="M64 52.5v13.5H45.5l1.3 14L64 87.9v14.5l-28-7.7-.5-6.4-.9-10.8H49l.6 6.4L64 87.9V75H45.9l-1.2-14L44 52.5zm0-27.5v13.5H30.9L30.6 35 30.3 25z"
          />
        </svg>
      )
    case 'bootstrap':
      return (
        <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
          <rect x="8" y="8" width="112" height="112" rx="24" fill="#7952B3" />
          <path
            fill="#fff"
            d="M45 36h26c9 0 15 4.7 15 13 0 6-3.6 10-8.3 11.2v.4C78.9 61.6 83 66 83 73c0 9-6.6 14-16.6 14H45V36zm23.8 20.6c4.6 0 7.2-2.2 7.2-6.1 0-3.7-2.6-5.8-7.1-5.8H55v11.9h13.8zM55 78.3h14.2c4.8 0 7.5-2.4 7.5-6.6 0-4.1-2.8-6.4-7.8-6.4H55v13z"
          />
        </svg>
      )
    case 'github':
      return <GithubIcon className={className} />
    case 'server':
      return <Server className={className} aria-hidden="true" />
    case 'logic':
      return <Braces className={className} aria-hidden="true" />
    case 'team':
      return <Users className={className} aria-hidden="true" />
    default:
      return <Braces className={className} aria-hidden="true" />
  }
}
