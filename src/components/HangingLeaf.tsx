/**
 * Physical stained-glass leaf hanging from the top of the page.
 * Anchored between About and Pieces; uses the transparent PNG asset.
 */
export default function HangingLeaf() {
  return (
    <div className="hanging-leaf" aria-hidden="true">
      {/* <span className="hanging-leaf__cord" /> */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hanging-leaf__image"
        src="/images/suncatcher_leaf_2.png"
        alt=""
        width={210}
        height={448}
      />
    </div>
  );
}
