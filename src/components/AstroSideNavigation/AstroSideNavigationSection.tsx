import classNames from "classnames";
import * as React from "react";
import styles from "./AstroSideNavigationSection.module.scss";
import { CSSTransition } from "react-transition-group";

export interface AstroSideNavigationSectionProps {
  /**
   * The content for the AstroSideNavigationSection
   */
  children?: React.ReactNode;
  /**
   * The name of the AstroSideNavigationSection
   */
  name: string;
}

export const AstroSideNavigationSection: React.FC<AstroSideNavigationSectionProps> =
  (props) => {
    const { children, name } = props;

    const [isExpanded, toggleIsExpanded] = React.useState<boolean>(false);

    return (
      <div className={styles.astroSideNavigationSectionContainer}>
        <div
          className={styles.astroSideNavigationSectionName}
          onClick={() => toggleIsExpanded(!isExpanded)}
        >
          {name}
        </div>
        <CSSTransition
          in={isExpanded}
          timeout={500}
          mountOnEnter
          unmountOnExit
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
          }}
        >
          <ul className={styles.astroSideNavigationSectionList}>
            {React.Children.map(children, (child, index) => {
              if (
                React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)
              ) {
                return React.cloneElement(child, { key: index });
              } else {
                return null;
              }
            })}{" "}
          </ul>
        </CSSTransition>
      </div>
    );
  };
