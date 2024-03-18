import { Fragment, cloneElement } from "react";

export default function MoodBar({
  moodData,
  emotions
}) {

  const styles = {
    firstBar: {
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30
    },
    lastBar: {
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30
    },
  }

  const firstNonZeroMoodIndex = moodData.findIndex(item => item.percent != 0);

  // Find the last item where percentage is not 0
  const reversedMoodData = [...moodData].reverse(); // Create a reversed copy of the array
  const lastNonZeroMoodIndex = moodData.length - reversedMoodData.findIndex(item => item.percent != 0) - 1;

  console.log("firstNonZeroMoodIndex", firstNonZeroMoodIndex, "lastNonZeroMoodIndex", lastNonZeroMoodIndex)

  return (
    <>
      <div className="mood-container">
        {moodData.map((mood, index) => {
          return (
            <Fragment key={index}>
              <div style={{
                width: `${mood.percent}%`,
                backgroundColor: emotions?.[index].backgroundColor,
                ...(firstNonZeroMoodIndex === index && styles.firstBar),
                ...(lastNonZeroMoodIndex === index && styles.lastBar),
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
                <span>{mood.percent.toFixed(0)}%</span>
              </div>
            </Fragment>
          ))
        }
      </div>
    </>
  )
}
