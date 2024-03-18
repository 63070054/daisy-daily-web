import { Fragment, cloneElement } from "react";

export default function MoodBar({
  moodData,
  emotions
}) {

  return (
    <>
      <div className="mood-container">
        {moodData.map((mood, index) => {
          return (
            <Fragment key={index}>
              <div style={{
                width: `${mood.percent}%`,
                backgroundColor: emotions?.[index].backgroundColor
              }} />
            </Fragment>
          )
        })}
      </div>
      <div className="emotion-percentage-container">
        {
          moodData.map((mood, index) => (
            <Fragment key={index}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4, flexDirection: "column" }}>
                {emotions?.[index].icon && cloneElement(emotions?.[index].icon, {
                  style: {
                    color: emotions?.[index].color,
                    backgroundColor: emotions?.[index].backgroundColor,
                    fontSize: 36,
                    borderRadius: "100%",
                  }
                })}
                <span>{mood.percent.toFixed(2)}%</span>
              </div>
            </Fragment>
          ))
        }
      </div>
    </>
  )
}
