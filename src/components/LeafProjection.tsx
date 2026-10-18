/**
 * Soft coloured light / shadow cast by the hanging leaf.
 * Completely separate from HangingLeaf — own SVG + own animation.
 *
 * Layer 1 = neutral silhouette (shadow)
 * Layer 2 = very soft sage / amber tint (stained-glass light)
 */
export default function LeafProjection() {
  return (
    <div className="leaf-projection" aria-hidden="true">
      <div className="leaf-projection__inner">
        {/* Soft dark silhouette */}
        <div className="leaf-projection__silhouette">
          <svg viewBox="0 0 154 388" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M76.96 0C122.78 66.82 159.05 152.73 153.32 217.64C147.6 290.18 111.32 349.36 76.96 387.54C42.6 349.36 6.32 290.18 0.6 217.64C-5.13 152.73 31.14 66.82 76.96 0Z"
              fill="#2b2924"
            />
          </svg>
        </div>

        {/* Extremely subtle coloured light */}
        <div className="leaf-projection__color">
          <svg viewBox="0 0 154 388" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="leafLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#cdb05c" />
                <stop offset="35%" stopColor="#9db05c" />
                <stop offset="70%" stopColor="#7c906c" />
                <stop offset="100%" stopColor="#c9a23f" />
              </linearGradient>
            </defs>
            <path
              d="M76.96 0C122.78 66.82 159.05 152.73 153.32 217.64C147.6 290.18 111.32 349.36 76.96 387.54C42.6 349.36 6.32 290.18 0.6 217.64C-5.13 152.73 31.14 66.82 76.96 0Z"
              fill="url(#leafLight)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
