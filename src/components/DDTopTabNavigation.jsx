import React from "react";

export default function DDTopTabNavigation({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <div style={styles.tab}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <button
            key={index}
            onClick={onPress}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={[
                styles.defaultLabel,
                isFocused ? styles.activeTab : {},
              ]}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

const styles = {
  tab: {
    marginTop: 20,
    marginBottom: 20,
    width: "50%",
    borderRadius: 1000,
    border: "3px solid #ffcf12",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  defaultLabel: {
    textAlign: "center",
  },
  activeTab: {
    color: "#ffff",
    backgroundColor: "#ffcf12",
    border: "3px solid #ffcf12",
    borderRadius: 1000,
    padding: "2px",
  },
};