import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 150 160" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-black',
          filled ? 'w-8' : 'w-0 stroke-white group-hover/logo:w-8'
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'fill-white' : 'fill-black'}
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M 208.703918,152.340149 C 208.641205,145.080002 208.709076,138.247986 208.557236,131.420868 C 208.491669,128.472763 209.659302,126.909081 212.415314,125.872162 C 241.37973,114.97464 270.307648,103.980125 299.249451,93.022415 C 304.355408,91.089233 305.232452,91.617271 305.291626,96.835289 C 305.361542,102.998436 305.198608,109.165756 305.355591,115.325691 C 305.431152,118.291405 304.255249,119.868225 301.511566,120.885292 C 275.138519,130.661636 248.793732,140.514099 222.446655,150.360306 C 219.329041,151.525406 216.282791,152.892349 213.131699,153.952408 C 211.566498,154.478958 209.501968,155.726807 208.703918,152.340149 M 134.647827,108.21019 C 150.06897,114.120323 165.104141,119.965347 180.228516,125.569557 C 183.193939,126.668358 184.498932,128.11084 184.429779,131.317474 C 184.26561,138.931351 184.376953,146.551163 184.376953,153.815643 C 182.391693,154.941391 181.195312,154.206161 179.978546,153.752029 C 151.468521,143.111267 122.992661,132.377274 94.417213,121.915253 C 89.908333,120.264473 88.301376,117.908478 88.569923,113.176659 C 88.962807,106.254128 88.670998,99.292725 88.670998,91.087845 C 104.590988,97.010628 119.442024,102.535713 134.647827,108.21019 M 264.454529,77.138977 C 268.278992,79.431328 265.800262,80.33493 263.894104,81.031197 C 257.01889,83.542496 249.723389,85.20388 243.283081,88.53344 C 234.042145,93.310883 225.609619,93.068321 216.34407,88.687912 C 208.881577,85.159935 208.627274,85.774208 208.594254,77.615334 C 208.576096,73.123299 208.48671,68.62867 208.295151,64.140953 C 208.055862,58.534676 208.911758,57.822304 214.156876,59.642181 C 230.811569,65.420799 247.462479,71.210373 264.454529,77.138977 M 184.36908,76.928452 C 184.241623,87.297997 185.338959,84.866585 176.435333,88.969635 C 167.627731,93.028412 159.719391,93.370613 150.977127,88.807289 C 144.856674,85.612511 137.902802,84.024147 131.348099,81.644096 C 129.858505,81.103218 128.082077,80.895027 126.800179,78.239143 C 145.538254,71.231964 164.204117,64.490219 184.368179,58.194244 C 184.368179,64.722366 184.368179,70.581329 184.36908,76.928452"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 5 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
    </svg>
  )
}

function Path1({ invert = false, filled = false, ...props }) {
  return (
    <path
      className={invert ? 'fill-white' : 'fill-neutral-950'}
      d="M208.703918,152.340149 
      C208.641205,145.080002 208.709076,138.247986 208.557236,131.420868 
      C208.491669,128.472763 209.659302,126.909081 212.415314,125.872162 
      C241.379730,114.974640 270.307648,103.980125 299.249451,93.022415 
      C304.355408,91.089233 305.232452,91.617271 305.291626,96.835289 
      C305.361542,102.998436 305.198608,109.165756 305.355591,115.325691 
      C305.431152,118.291405 304.255249,119.868225 301.511566,120.885292 
      C275.138519,130.661636 248.793732,140.514099 222.446655,150.360306 
      C219.329041,151.525406 216.282791,152.892349 213.131699,153.952408 
      C211.566498,154.478958 209.501968,155.726807 208.703918,152.340149 
      z"
      {...props}
    />
  );
}

function Path2({ invert = false, filled = false, ...props }) {
  return (
    <path
      className={invert ? 'fill-white' : 'fill-neutral-950'}
      d="M134.647827,108.210190 
      C150.068970,114.120323 165.104141,119.965347 180.228516,125.569557 
      C183.193939,126.668358 184.498932,128.110840 184.429779,131.317474 
      C184.265610,138.931351 184.376953,146.551163 184.376953,153.815643 
      C182.391693,154.941391 181.195312,154.206161 179.978546,153.752029 
      C151.468521,143.111267 122.992661,132.377274 94.417213,121.915253 
      C89.908333,120.264473 88.301376,117.908478 88.569923,113.176659 
      C88.962807,106.254128 88.670998,99.292725 88.670998,91.087845 
      C104.590988,97.010628 119.442024,102.535713 134.647827,108.210190 
      z"
      {...props}
    />
  );
}

function Path3({ invert = false, filled = false, ...props }) {
  return (
    <path
      className={invert ? 'fill-white' : 'fill-neutral-950'}
      d="M264.454529,77.138977 
      C268.278992,79.431328 265.800262,80.334930 263.894104,81.031197 
      C257.018890,83.542496 249.723389,85.203880 243.283081,88.533440 
      C234.042145,93.310883 225.609619,93.068321 216.344070,88.687912 
      C208.881577,85.159935 208.627274,85.774208 208.594254,77.615334 
      C208.576096,73.123299 208.486710,68.628670 208.295151,64.140953 
      C208.055862,58.534676 208.911758,57.822304 214.156876,59.642181 
      C230.811569,65.420799 247.462479,71.210373 264.454529,77.138977 
      z"
      {...props}
    />
  );
}

function Path4({ invert = false, filled = false, ...props }) {
  return (
    <path
      className={invert ? 'fill-white' : 'fill-neutral-950'}
      d="M184.369080,76.928452 
      C184.241623,87.297997 185.338959,84.866585 176.435333,88.969635 
      C167.627731,93.028412 159.719391,93.370613 150.977127,88.807289 
      C144.856674,85.612511 137.902802,84.024147 131.348099,81.644096 
      C129.858505,81.103218 128.082077,80.895027 126.800179,78.239143 
      C145.538254,71.231964 164.204117,64.490219 184.368179,58.194244 
      C184.368179,64.722366 184.368179,70.581329 184.369080,76.928452 
      z"
      {...props}
    />
  );
}

// export function Logo({
//   className,
//   invert = false,
//   filled = false,
//   fillOnHover = false,
//   ...props
// }) {
//   let id = useId()
//   return (
//     <svg
//       width="40%"
//       viewBox="0 0 384 208"
//       enableBackground="new 0 0 384 208"
//       {...props}
//     >
//       <rect
//         clipPath={`url(#${id}-clip)`}
//         className={clsx(
//           'h-8 transition-all duration-300',
//           invert ? 'fill-white' : 'fill-neutral-950',
//           filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
//         )}
//       />
//       <Path1 />
//       <Path2 />
//       <Path3 />
//       <Path4 />
//       <path
//         className={invert ? 'fill-white' : 'fill-neutral-950'}
//         d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
//       />

//     </svg>
//   );
// }
