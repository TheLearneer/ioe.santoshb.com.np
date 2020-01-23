export let codes = [
	'sh401', 'ct401', 'me401', 'sh402', 'ce401', 'ee401', 'sh451', 'me451', 'ex451', 'sh453', 'me452', 'me453', 'sh501', 'ct501', 'ct502', 'ee401', 'ex501', 'ex502', 'ex503', 'sh551', 'sh553', 'ee552', 'ee554', 'ct551', 'ct552', 'ex551', 'sh601', 'sh602', 'ct601', 'ct602', 'ct603', 'ex602', 'ex603', 'ce655', 'ct651', 'ct652', 'ct653', 'ct655', 'ct656', 'ct654', 'me708', 'ex701', 'ct701', 'ct702', 'ct703', 'ct704', 'ce752', 'ct751', 'ct753', 'ct754'
]

export function getCourseID(code) {
	switch(code.toLowerCase()) {
		case 'sh401':
			return 'engineering-mathematics-i';
		case 'ct401':
			return 'computer-programming';
		case 'me401':
			return 'engineering-drawing-i';
		case 'sh402':
			return 'engineering-physics';
		case 'ce401':
			return 'applied-mechanics';
		case 'ee401':
			return 'basic-electrical-engineering';

		case 'sh451':
			return 'engineering-mathematics-ii';
		case 'me451':
			return 'engineering-drawing-ii';
		case 'ex451':
			return 'basic-electronics-engineering';
		case 'sh453':
			return 'engineering-chemistry';
		case 'me452':
			return 'fundamental-of-thermodynamics-and-heat-transfer';
		case 'me453':
			return 'workshop-technology';

		case 'sh501':
			return 'engineering-mathematics-iii';
		case 'ct501':
			return 'object-oriented-programming';
		case 'ct502':
			return 'theory-of-computation';
		case 'ee501':
			return 'electric-circuit-theory';
		case 'ex501':
			return 'electronic-devices-and-circuits';
		case 'ex502':
			return 'digital-logic';
		case 'ex503':
			return 'electromagnetics';

		case 'sh551':
				return 'applied-mathematics';
		case 'sh553':
			return 'numerical-methods';
		case 'ee552':
			return 'instrumentation-i';
		case 'ee554':
			return 'electrical-machines';
		case 'ct551':
			return 'discrete-structures';
		case 'ct552':
			return 'data-structure-and-algorithm';
		case 'ex551':
			return 'microprocessor';
		case 'sh601':
			return 'communication-english';
		case 'sh602':
			return 'probability-and-statistics';
		case 'ct601':
			return 'software-engineering';
		case 'ct602':
			return 'data-communication';
		case 'ct603':
			return 'computer-organization-and-architecture';
		case 'ex602':
			return 'instrumentation-ii';
		case 'ex603':
			return 'computer-graphics';

		case 'ce655':
			return 'engineering-economics';
		case 'ct651':
			return 'object-oriented-analysis-and-design';
		case 'ct652':
			return 'database-management-system';
		case 'ct653':
			return 'artificial-intelligence';
		case 'ct655':
			return 'embedded-system';
		case 'ct656':
			return 'operating-system';
		case 'ct654':
			return 'minor-project';

		case 'me708':
			return 'organization-and-management';
		case 'ex701':
			return 'energy-environment-and-society';
		case 'ct701':
			return 'project-management';
		case 'ct702':
			return 'computer-network';
		case 'ct703':
			return 'distributed-system';
		case 'ct704':
			return 'digital-signal-analysis-and-processing';

		case 'ce752':
			return 'professional-practice';
		case 'ct751':
			return 'information-system';
		case 'ct753':
			return 'simulation-and-modelling';
		case 'ct754':
			return 'internet-and-intranet';

		default:
			return code.toLowerCase();
	}
}