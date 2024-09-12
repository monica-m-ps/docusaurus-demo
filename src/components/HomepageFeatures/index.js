import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sysdig title 1',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The agent install scripts have been updated to mount `/etc/modprobe.d`
from the host into the agent container. This prevents a problem where
the agent loaded drivers that were excluded from the host.
      </>
    ),
  },
  {
    title: 'Sysdig title 2',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Added events monitoring for statefulsets, services, and horizontal pod
auto-scalers (HPAs) when the Golang-based events monitoring feature is
enabled. To enable, see [Process Kubernetes
Events](/en/docs/sysdig-monitor/events/process-kubernetes-events/).
      </>
    ),
  },
  {
    title: 'Sysdig title 3',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Added regex capability for consumer groups and topics in Apache Kafka
        configurations. See Example 6 in [Apache Kafka].
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
