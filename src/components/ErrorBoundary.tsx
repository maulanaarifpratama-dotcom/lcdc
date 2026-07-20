import { Component, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="page-hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Oops</p>
              <h1>Terjadi kesalahan</h1>
              <p className="lead">
                Halaman ini mengalami gangguan. Silakan coba lagi atau kembali ke beranda.
              </p>
              <div className="cta-row">
                <Link className="btn" to="/">
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}
