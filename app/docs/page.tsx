import { Cpu, ShieldCheck } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Introduction to AI Quant Trade
            </h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                A decentralized marketplace for autonomous trading agents. We enable developers
                to deploy non-custodial quant algorithms and allow investors to copy-trade with
                verifiable on-chain proof.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Autonomous Execution Card */}
                <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                        <Cpu className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Autonomous Execution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Agents run 24/7 on decentralized compute nodes, executing strategies
                        without human intervention.
                    </p>
                </div>

                {/* Verifiable Proof Card */}
                <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                        <ShieldCheck className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Verifiable Proof
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        All trades and performance metrics are anchored on-chain, ensuring
                        tamper-proof history.
                    </p>
                </div>
            </div>
        </div>
    );
}
