import React from 'react'
import '../../App.css'
import { ExternalLink } from 'react-external-link';


function Infrastructure() {
  window.scrollTo(0, 0);
    return (
        <div className="cards">
        <div className='hero'>
        <h1>Infrastructure Projects</h1>
        </div>
        <div className="hero-btns">
        <h4 className="hr">Kubernetes Homelab</h4>
          <h5 className="stack"><i className="devicon-kubernetes-plain"></i> K3s / <i className="devicon-raspberrypi-plain"></i> Raspberry Pi / <i className="devicon-grafana-plain"></i> Grafana</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                4x Raspberry Pi 5 on Ethernet backbone — 1 K3s control plane, 2 workers, 1 DNS/Ansible node
                </li>
                <li>
                Full observability stack: Prometheus metrics, Loki logs, OpenTelemetry collector DaemonSet, Grafana dashboards
                </li>
                <li>
                CPU, memory, network and disk I/O panels for all 4 nodes including the DNS/Ansible node, refreshing every 30 seconds
                </li>
                <li>
                Accessible worldwide over HTTPS via Cloudflare Tunnel
                </li>
              </h3>
            </ul>
          </div>
          <ExternalLink href="https://lab.adrienesquerre.com">
          <a className="greenb button fatbaby serif round glass">
          Kubernetes Homelab <i className="fas fa-server"></i>
          </a>
          </ExternalLink>
        </div>
        <div className="hero-btns">
        <h4 className="hr">Terraform to deploy a React app to AWS ECR</h4>
          <h5 className="stack"><i className="devicon-terraform-plain"></i> Terraform / <i className="fa-brands fa-docker"></i> Docker / <i className="fa-brands fa-aws"></i> AWS</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                The containerized weather app is deployed to AWS ECR
                </li>
                <li>
                Terraform and React repos available
                </li>
              </h3>
            </ul>
          </div>
          <div className="myvids">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/F6ikuuq0aaA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
}

export default Infrastructure
