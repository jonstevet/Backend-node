--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.2

-- Started on 2023-04-02 20:55:30 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 32302)
-- Name: ALQUILERES; Type: TABLE; Schema: public; Owner: jonsteve
--

CREATE TABLE public."ALQUILERES" (
    "ID" integer NOT NULL,
    "FECHA" timestamp with time zone NOT NULL,
    "TIEMPO" integer NOT NULL,
    "VALOR_TOTAL" integer NOT NULL,
    "SALDO" integer NOT NULL,
    "ABONO_INICIAL" integer NOT NULL,
    "DEVUELTO" boolean NOT NULL,
    "CARRO_ID" integer,
    "CLIENTE_ID" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."ALQUILERES" OWNER TO jonsteve;

--
-- TOC entry 218 (class 1259 OID 32301)
-- Name: ALQUILERES_ID_seq; Type: SEQUENCE; Schema: public; Owner: jonsteve
--

CREATE SEQUENCE public."ALQUILERES_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ALQUILERES_ID_seq" OWNER TO jonsteve;

--
-- TOC entry 3361 (class 0 OID 0)
-- Dependencies: 218
-- Name: ALQUILERES_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jonsteve
--

ALTER SEQUENCE public."ALQUILERES_ID_seq" OWNED BY public."ALQUILERES"."ID";


--
-- TOC entry 215 (class 1259 OID 32286)
-- Name: CARROS; Type: TABLE; Schema: public; Owner: jonsteve
--

CREATE TABLE public."CARROS" (
    "ID" integer NOT NULL,
    "PLACA" character varying(255) NOT NULL,
    "MARCA" character varying(255) NOT NULL,
    "MODELO" character varying(255) NOT NULL,
    "COSTO" numeric NOT NULL,
    "DISPONIBLE" boolean NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."CARROS" OWNER TO jonsteve;

--
-- TOC entry 214 (class 1259 OID 32285)
-- Name: CARROS_ID_seq; Type: SEQUENCE; Schema: public; Owner: jonsteve
--

CREATE SEQUENCE public."CARROS_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CARROS_ID_seq" OWNER TO jonsteve;

--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 214
-- Name: CARROS_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jonsteve
--

ALTER SEQUENCE public."CARROS_ID_seq" OWNED BY public."CARROS"."ID";


--
-- TOC entry 217 (class 1259 OID 32295)
-- Name: CLIENTES; Type: TABLE; Schema: public; Owner: jonsteve
--

CREATE TABLE public."CLIENTES" (
    "ID" integer NOT NULL,
    "CEDULA" bigint NOT NULL,
    "NOMBRE" character varying(255) NOT NULL,
    "TELEFONO1" bigint NOT NULL,
    "TELEFONO2" bigint NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."CLIENTES" OWNER TO jonsteve;

--
-- TOC entry 216 (class 1259 OID 32294)
-- Name: CLIENTES_ID_seq; Type: SEQUENCE; Schema: public; Owner: jonsteve
--

CREATE SEQUENCE public."CLIENTES_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CLIENTES_ID_seq" OWNER TO jonsteve;

--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 216
-- Name: CLIENTES_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jonsteve
--

ALTER SEQUENCE public."CLIENTES_ID_seq" OWNED BY public."CLIENTES"."ID";


--
-- TOC entry 221 (class 1259 OID 32319)
-- Name: PAGOS; Type: TABLE; Schema: public; Owner: jonsteve
--

CREATE TABLE public."PAGOS" (
    "ID" integer NOT NULL,
    "FECHA" timestamp with time zone NOT NULL,
    "VALOR" integer NOT NULL,
    "ALQUILER_ID" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."PAGOS" OWNER TO jonsteve;

--
-- TOC entry 220 (class 1259 OID 32318)
-- Name: PAGOS_ID_seq; Type: SEQUENCE; Schema: public; Owner: jonsteve
--

CREATE SEQUENCE public."PAGOS_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PAGOS_ID_seq" OWNER TO jonsteve;

--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 220
-- Name: PAGOS_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jonsteve
--

ALTER SEQUENCE public."PAGOS_ID_seq" OWNED BY public."PAGOS"."ID";


--
-- TOC entry 3193 (class 2604 OID 32305)
-- Name: ALQUILERES ID; Type: DEFAULT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."ALQUILERES" ALTER COLUMN "ID" SET DEFAULT nextval('public."ALQUILERES_ID_seq"'::regclass);


--
-- TOC entry 3191 (class 2604 OID 32289)
-- Name: CARROS ID; Type: DEFAULT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."CARROS" ALTER COLUMN "ID" SET DEFAULT nextval('public."CARROS_ID_seq"'::regclass);


--
-- TOC entry 3192 (class 2604 OID 32298)
-- Name: CLIENTES ID; Type: DEFAULT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."CLIENTES" ALTER COLUMN "ID" SET DEFAULT nextval('public."CLIENTES_ID_seq"'::regclass);


--
-- TOC entry 3194 (class 2604 OID 32322)
-- Name: PAGOS ID; Type: DEFAULT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."PAGOS" ALTER COLUMN "ID" SET DEFAULT nextval('public."PAGOS_ID_seq"'::regclass);


--
-- TOC entry 3353 (class 0 OID 32302)
-- Dependencies: 219
-- Data for Name: ALQUILERES; Type: TABLE DATA; Schema: public; Owner: jonsteve
--

COPY public."ALQUILERES" ("ID", "FECHA", "TIEMPO", "VALOR_TOTAL", "SALDO", "ABONO_INICIAL", "DEVUELTO", "CARRO_ID", "CLIENTE_ID", "createdAt", "updatedAt") FROM stdin;
1	2023-01-21 01:32:36.316+00	23	805031	424824	194129	t	11	3	2023-04-02 19:02:18.54+00	2023-04-02 19:02:18.54+00
3	2022-11-04 21:49:42.374+00	21	716403	392588	127489	t	5	14	2023-04-02 19:02:18.578+00	2023-04-02 19:02:18.578+00
4	2022-08-08 21:31:55.833+00	24	647342	340181	270067	f	1	15	2023-04-02 19:02:18.584+00	2023-04-02 19:02:18.584+00
5	2022-09-25 06:46:32.468+00	12	881025	580434	264749	t	7	1	2023-04-02 19:02:18.591+00	2023-04-02 19:02:18.591+00
6	2022-05-17 21:26:12.428+00	1	686605	522680	206507	f	9	9	2023-04-02 19:02:18.597+00	2023-04-02 19:02:18.597+00
7	2023-01-10 17:54:06.52+00	20	677467	320554	227028	t	8	2	2023-04-02 19:02:18.603+00	2023-04-02 19:02:18.603+00
8	2023-01-05 15:47:31.083+00	25	807879	323375	290937	t	19	7	2023-04-02 19:02:18.61+00	2023-04-02 19:02:18.61+00
9	2023-03-02 00:10:59.785+00	16	830374	444262	232007	f	16	9	2023-04-02 19:02:18.617+00	2023-04-02 19:02:18.617+00
10	2022-10-17 13:30:03.064+00	22	679766	452697	207511	t	12	2	2023-04-02 19:02:18.623+00	2023-04-02 19:02:18.623+00
11	2022-06-22 21:42:25.023+00	8	728573	524452	124776	f	5	19	2023-04-02 19:02:18.629+00	2023-04-02 19:02:18.629+00
12	2022-06-05 11:24:32.554+00	28	849163	478382	166759	t	4	4	2023-04-02 19:02:18.636+00	2023-04-02 19:02:18.636+00
13	2022-09-27 23:03:12.079+00	18	672210	397431	284542	f	6	12	2023-04-02 19:02:18.641+00	2023-04-02 19:02:18.641+00
14	2023-01-24 15:47:59.398+00	28	762737	523032	125353	t	9	1	2023-04-02 19:02:18.65+00	2023-04-02 19:02:18.65+00
15	2022-11-07 13:47:05.339+00	2	911388	462267	236817	t	8	18	2023-04-02 19:02:18.655+00	2023-04-02 19:02:18.655+00
16	2022-09-22 07:43:00.648+00	1	853378	456284	186175	t	19	5	2023-04-02 19:02:18.661+00	2023-04-02 19:02:18.661+00
17	2022-08-15 07:58:52.97+00	26	751874	362890	236086	t	14	16	2023-04-02 19:02:18.666+00	2023-04-02 19:02:18.666+00
18	2022-08-29 11:36:40.449+00	5	887273	574930	134633	f	20	6	2023-04-02 19:02:18.672+00	2023-04-02 19:02:18.672+00
19	2022-08-18 11:46:33.709+00	11	956674	443840	249521	t	18	18	2023-04-02 19:02:18.68+00	2023-04-02 19:02:18.68+00
20	2022-11-19 07:15:36.07+00	8	650420	304784	269733	f	14	16	2023-04-02 19:02:18.692+00	2023-04-02 19:02:18.692+00
21	2022-11-12 12:42:01.934+00	27	762411	344239	231708	f	9	16	2023-04-02 19:02:18.706+00	2023-04-02 19:02:18.706+00
22	2023-03-27 14:03:16.423+00	9	659646	376839	294886	t	8	1	2023-04-02 19:02:18.713+00	2023-04-02 19:02:18.713+00
23	2022-06-02 16:27:46.508+00	16	829964	341894	174456	f	7	11	2023-04-02 19:02:18.72+00	2023-04-02 19:02:18.72+00
24	2022-07-14 12:32:25.508+00	0	755602	408287	251317	f	19	15	2023-04-02 19:02:18.726+00	2023-04-02 19:02:18.726+00
25	2022-10-24 17:18:54.086+00	2	848923	540189	234536	f	10	14	2023-04-02 19:02:18.732+00	2023-04-02 19:02:18.732+00
26	2022-11-01 05:35:18.584+00	20	942308	584729	191800	t	18	14	2023-04-02 19:02:18.738+00	2023-04-02 19:02:18.738+00
27	2022-05-15 05:20:07.272+00	26	898021	472634	283572	f	5	11	2023-04-02 19:02:18.744+00	2023-04-02 19:02:18.744+00
28	2022-06-23 20:46:13.322+00	1	608510	527123	208509	f	3	3	2023-04-02 19:02:18.751+00	2023-04-02 19:02:18.751+00
29	2023-01-28 12:05:39.489+00	16	698399	428020	236915	t	10	11	2023-04-02 19:02:18.757+00	2023-04-02 19:02:18.757+00
30	2022-09-04 22:59:03.668+00	24	601270	346346	197464	t	19	10	2023-04-02 19:02:18.765+00	2023-04-02 19:02:18.765+00
2	2023-01-21 06:59:19.536+00	6	992434	420548	177870	f	7	1	2023-04-02 19:02:18.572+00	2023-04-02 19:02:18.572+00
\.


--
-- TOC entry 3349 (class 0 OID 32286)
-- Dependencies: 215
-- Data for Name: CARROS; Type: TABLE DATA; Schema: public; Owner: jonsteve
--

COPY public."CARROS" ("ID", "PLACA", "MARCA", "MODELO", "COSTO", "DISPONIBLE", "createdAt", "updatedAt") FROM stdin;
1	1cju3s	Smart	Fiesta	47644	t	2023-04-02 19:00:49.346+00	2023-04-02 19:00:49.346+00
2	m4z7yk	Jaguar	XC90	51456	t	2023-04-02 19:00:49.394+00	2023-04-02 19:00:49.394+00
3	e5mre8	Fiat	Aventador	26781	f	2023-04-02 19:00:49.404+00	2023-04-02 19:00:49.404+00
4	v49d68	Jeep	F-150	6103	t	2023-04-02 19:00:49.415+00	2023-04-02 19:00:49.415+00
5	1ucd3p	Audi	El Camino	50386	t	2023-04-02 19:00:49.426+00	2023-04-02 19:00:49.426+00
7	2n45vh	Maserati	Mercielago	1039	f	2023-04-02 19:00:49.444+00	2023-04-02 19:00:49.444+00
8	5yh6sd	Jaguar	Impala	43487	f	2023-04-02 19:00:49.453+00	2023-04-02 19:00:49.453+00
10	dinhwh	Porsche	Camry	12520	t	2023-04-02 19:00:49.471+00	2023-04-02 19:00:49.471+00
11	9tall5	Mazda	Fiesta	96044	f	2023-04-02 19:00:49.478+00	2023-04-02 19:00:49.478+00
12	83c0cg	Volkswagen	Accord	67963	f	2023-04-02 19:00:49.485+00	2023-04-02 19:00:49.485+00
13	qwttxt	Jaguar	El Camino	53374	f	2023-04-02 19:00:49.491+00	2023-04-02 19:00:49.491+00
14	b3o08b	Jaguar	Focus	22678	f	2023-04-02 19:00:49.501+00	2023-04-02 19:00:49.501+00
15	w57czh	Rolls Royce	Cruze	35170	t	2023-04-02 19:00:49.508+00	2023-04-02 19:00:49.508+00
16	j08mij	Chevrolet	Corvette	63971	f	2023-04-02 19:00:49.516+00	2023-04-02 19:00:49.516+00
17	vbdi65	Smart	Model T	27412	t	2023-04-02 19:00:49.522+00	2023-04-02 19:00:49.522+00
18	56tlx9	Mazda	CTS	53103	t	2023-04-02 19:00:49.528+00	2023-04-02 19:00:49.528+00
19	2841vb	Toyota	Explorer	93985	t	2023-04-02 19:00:49.537+00	2023-04-02 19:00:49.537+00
20	0fon86	Mercedes Benz	Prius	32101	t	2023-04-02 19:00:49.544+00	2023-04-02 19:00:49.544+00
21	l09vrm	Smart	Focus	34955	t	2023-04-02 19:00:49.551+00	2023-04-02 19:00:49.551+00
22	7ci8wx	Kia	Camaro	87814	f	2023-04-02 19:00:49.558+00	2023-04-02 19:00:49.558+00
23	3iphva	Mercedes Benz	Expedition	87261	f	2023-04-02 19:00:49.566+00	2023-04-02 19:00:49.566+00
24	qey91g	Lamborghini	Malibu	35921	t	2023-04-02 19:00:49.575+00	2023-04-02 19:00:49.575+00
25	flycbt	Mercedes Benz	El Camino	83201	t	2023-04-02 19:00:49.582+00	2023-04-02 19:00:49.582+00
26	y7u6s6	Smart	Sentra	81851	f	2023-04-02 19:00:49.588+00	2023-04-02 19:00:49.588+00
27	kh4m0s	Polestar	Model S	20343	f	2023-04-02 19:00:49.594+00	2023-04-02 19:00:49.594+00
28	ai2juw	Kia	Impala	82788	t	2023-04-02 19:00:49.601+00	2023-04-02 19:00:49.601+00
29	4f0jto	Land Rover	Countach	49127	f	2023-04-02 19:00:49.608+00	2023-04-02 19:00:49.608+00
30	y76bts	Tesla	Fiesta	30732	t	2023-04-02 19:00:49.614+00	2023-04-02 19:00:49.614+00
31	nfnfqp	Ferrari	Prius	81949	f	2023-04-02 19:00:49.621+00	2023-04-02 19:00:49.621+00
32	37lewn	Volkswagen	Ranchero	91930	t	2023-04-02 19:00:49.626+00	2023-04-02 19:00:49.626+00
33	2cprbq	Honda	PT Cruiser	5588	t	2023-04-02 19:00:49.634+00	2023-04-02 19:00:49.634+00
34	s9yg1p	Mercedes Benz	Camry	90417	f	2023-04-02 19:00:49.642+00	2023-04-02 19:00:49.642+00
35	hw1tzj	Bentley	Colorado	99337	f	2023-04-02 19:00:49.651+00	2023-04-02 19:00:49.651+00
36	qwnqkk	Rolls Royce	Corvette	19855	f	2023-04-02 19:00:49.657+00	2023-04-02 19:00:49.657+00
37	7pmwh9	Volkswagen	El Camino	73522	t	2023-04-02 19:00:49.663+00	2023-04-02 19:00:49.663+00
38	7fmqxb	Ferrari	Prius	21734	f	2023-04-02 19:00:49.671+00	2023-04-02 19:00:49.671+00
39	b82ugz	Kia	PT Cruiser	34632	f	2023-04-02 19:00:49.679+00	2023-04-02 19:00:49.679+00
40	y51cpw	Mini	Colorado	34565	t	2023-04-02 19:00:49.689+00	2023-04-02 19:00:49.689+00
41	72uxh9	Porsche	Grand Caravan	21132	f	2023-04-02 19:00:49.699+00	2023-04-02 19:00:49.699+00
42	xvyhfg	Bugatti	Camaro	10071	f	2023-04-02 19:00:49.708+00	2023-04-02 19:00:49.708+00
43	vpm10l	Bugatti	Corvette	43680	f	2023-04-02 19:00:49.717+00	2023-04-02 19:00:49.717+00
44	oc7c4z	Hyundai	Escalade	52058	t	2023-04-02 19:00:49.724+00	2023-04-02 19:00:49.724+00
45	o110if	Porsche	Element	80665	f	2023-04-02 19:00:49.73+00	2023-04-02 19:00:49.73+00
46	vrdzch	Volkswagen	A4	96338	f	2023-04-02 19:00:49.742+00	2023-04-02 19:00:49.742+00
47	ivyt8y	Honda	Challenger	62391	t	2023-04-02 19:00:49.75+00	2023-04-02 19:00:49.75+00
48	tpptf0	Land Rover	Corvette	83381	t	2023-04-02 19:00:49.758+00	2023-04-02 19:00:49.758+00
49	8fu52q	Bugatti	Sentra	4160	t	2023-04-02 19:00:49.771+00	2023-04-02 19:00:49.771+00
50	66u63v	Mazda	LeBaron	45233	t	2023-04-02 19:00:49.777+00	2023-04-02 19:00:49.777+00
6	vzxszu	Bugatti	f-150	57752	t	2023-04-02 19:00:49.434+00	2023-04-02 19:00:49.434+00
9	ziyher	Jaguar	impala	8582	t	2023-04-02 19:00:49.461+00	2023-04-02 19:00:49.461+00
\.


--
-- TOC entry 3351 (class 0 OID 32295)
-- Dependencies: 217
-- Data for Name: CLIENTES; Type: TABLE DATA; Schema: public; Owner: jonsteve
--

COPY public."CLIENTES" ("ID", "CEDULA", "NOMBRE", "TELEFONO1", "TELEFONO2", "createdAt", "updatedAt") FROM stdin;
1	587506167	Stewart Okuneva	3210241763	6009789134	2023-04-02 19:01:49.018+00	2023-04-02 19:01:49.018+00
2	538419376	Ms. Trevor Jacobi	3558567438	6024902627	2023-04-02 19:01:49.047+00	2023-04-02 19:01:49.047+00
3	5777428913	Margaret Corwin	3631429470	6085685187	2023-04-02 19:01:49.058+00	2023-04-02 19:01:49.058+00
4	3391998183	Justin Wisoky	3748000794	6086771808	2023-04-02 19:01:49.065+00	2023-04-02 19:01:49.065+00
5	6929754565	Arlene Gleason	3251093931	6018768803	2023-04-02 19:01:49.074+00	2023-04-02 19:01:49.074+00
6	2046020156	Agnes Tremblay	3982346295	6075026264	2023-04-02 19:01:49.082+00	2023-04-02 19:01:49.082+00
7	9061243833	Stella Welch II	3038783444	6028855552	2023-04-02 19:01:49.087+00	2023-04-02 19:01:49.087+00
8	7957353434	Darin Krajcik	3997348153	6096649571	2023-04-02 19:01:49.096+00	2023-04-02 19:01:49.096+00
9	6528295285	Erika Bayer	3413828011	6060456567	2023-04-02 19:01:49.108+00	2023-04-02 19:01:49.108+00
10	8313997928	Sergio Quigley	3287499443	6015346427	2023-04-02 19:01:49.115+00	2023-04-02 19:01:49.115+00
11	2467477352	Vicky Harber	3980606064	6046553062	2023-04-02 19:01:49.122+00	2023-04-02 19:01:49.122+00
12	3431346460	Ira Jones	3915621381	6094947812	2023-04-02 19:01:49.131+00	2023-04-02 19:01:49.131+00
13	8676587268	Dr. Julio Moen	3753092464	6016795479	2023-04-02 19:01:49.136+00	2023-04-02 19:01:49.136+00
14	2417225548	Roberto Grady	3166304311	6086505417	2023-04-02 19:01:49.145+00	2023-04-02 19:01:49.145+00
15	3582966844	Dixie Hegmann	3372783988	6035502692	2023-04-02 19:01:49.15+00	2023-04-02 19:01:49.15+00
16	2525503517	Lori Hoeger	3822510318	6022856060	2023-04-02 19:01:49.155+00	2023-04-02 19:01:49.155+00
17	1640418180	Ms. Lori Rippin	3322401590	6021433551	2023-04-02 19:01:49.162+00	2023-04-02 19:01:49.162+00
18	2988909413	Darla Torp	3316157915	6018967504	2023-04-02 19:01:49.167+00	2023-04-02 19:01:49.167+00
19	9365789853	Marco Hilpert	3189566781	6086191366	2023-04-02 19:01:49.174+00	2023-04-02 19:01:49.174+00
20	1285687674	Darren Stamm	3329889655	6011331677	2023-04-02 19:01:49.18+00	2023-04-02 19:01:49.18+00
21	8767334226	Viola Durgan	3060853902	6069108335	2023-04-02 19:01:49.185+00	2023-04-02 19:01:49.185+00
22	3954854111	Kenneth Kihn V	3062742179	6065191144	2023-04-02 19:01:49.191+00	2023-04-02 19:01:49.191+00
23	6454232142	Trevor Bradtke	3449900008	6097747070	2023-04-02 19:01:49.196+00	2023-04-02 19:01:49.196+00
24	1723657286	Dr. Juanita Nader	3796312005	6072955061	2023-04-02 19:01:49.202+00	2023-04-02 19:01:49.202+00
25	9747054971	Ian Hoeger	3527914138	6064416703	2023-04-02 19:01:49.208+00	2023-04-02 19:01:49.208+00
26	9276125987	Darren Leannon	3757325212	6002996456	2023-04-02 19:01:49.213+00	2023-04-02 19:01:49.213+00
27	6231455452	Harold Hane III	3896983861	6007291997	2023-04-02 19:01:49.219+00	2023-04-02 19:01:49.219+00
28	3369636220	Ms. Nicole Hamill	3010461105	6096045979	2023-04-02 19:01:49.225+00	2023-04-02 19:01:49.225+00
29	338990445	Melanie Reynolds	3160539555	6035667566	2023-04-02 19:01:49.231+00	2023-04-02 19:01:49.231+00
30	1418044043	Mamie Jakubowski	3669155451	6031138379	2023-04-02 19:01:49.236+00	2023-04-02 19:01:49.236+00
31	3299784795	Camille Abbott	3660510441	6082317935	2023-04-02 19:01:49.242+00	2023-04-02 19:01:49.242+00
32	21671236	Marie Lesch	3357515260	6075432325	2023-04-02 19:01:49.248+00	2023-04-02 19:01:49.248+00
33	7611396367	Tracy Hammes	3328322931	6029594711	2023-04-02 19:01:49.254+00	2023-04-02 19:01:49.254+00
34	8716529923	Orlando Volkman	3173085331	6033654334	2023-04-02 19:01:49.26+00	2023-04-02 19:01:49.26+00
35	5288298917	Miss Kristin Keeling	3467496250	6010824788	2023-04-02 19:01:49.266+00	2023-04-02 19:01:49.266+00
36	9845442566	Nora Dibbert	3903754883	6054673690	2023-04-02 19:01:49.27+00	2023-04-02 19:01:49.27+00
37	8924334531	Amber Parker	3692288851	6049123093	2023-04-02 19:01:49.277+00	2023-04-02 19:01:49.277+00
38	2348375983	Howard Parker	3602128090	6066000452	2023-04-02 19:01:49.282+00	2023-04-02 19:01:49.282+00
39	1557310016	Dr. Joshua Boehm	3142239448	6080732842	2023-04-02 19:01:49.287+00	2023-04-02 19:01:49.287+00
40	4724250984	Dominick Welch	3872118461	6026237151	2023-04-02 19:01:49.294+00	2023-04-02 19:01:49.294+00
41	1689278308	Ernestine Wintheiser	3257791201	6029416704	2023-04-02 19:01:49.299+00	2023-04-02 19:01:49.299+00
42	2124100908	Opal Sporer	3539724817	6022478910	2023-04-02 19:01:49.304+00	2023-04-02 19:01:49.304+00
43	6988329502	Clara Dietrich DDS	3778112571	6019056692	2023-04-02 19:01:49.311+00	2023-04-02 19:01:49.311+00
44	7491093065	Kirk Streich	3391130292	6073701205	2023-04-02 19:01:49.316+00	2023-04-02 19:01:49.316+00
45	4151917773	Lucille Sanford	3698363315	6084810495	2023-04-02 19:01:49.32+00	2023-04-02 19:01:49.32+00
46	4203894390	Norman Kozey	3705688084	6094767720	2023-04-02 19:01:49.327+00	2023-04-02 19:01:49.327+00
47	8782703058	Dolores Labadie	3273967163	6085298494	2023-04-02 19:01:49.332+00	2023-04-02 19:01:49.332+00
48	532663277	Beatrice Kemmer	3436594983	6012344060	2023-04-02 19:01:49.337+00	2023-04-02 19:01:49.337+00
49	6789286306	Preston Paucek	3057979303	6097917833	2023-04-02 19:01:49.346+00	2023-04-02 19:01:49.346+00
50	7778886353	Daryl Muller	3632627514	6016670396	2023-04-02 19:01:49.35+00	2023-04-02 19:01:49.35+00
\.


--
-- TOC entry 3355 (class 0 OID 32319)
-- Dependencies: 221
-- Data for Name: PAGOS; Type: TABLE DATA; Schema: public; Owner: jonsteve
--

COPY public."PAGOS" ("ID", "FECHA", "VALOR", "ALQUILER_ID", "createdAt", "updatedAt") FROM stdin;
1	2021-11-02 20:43:07.92+00	900815	1	2023-04-02 19:02:30.33+00	2023-04-02 19:02:30.33+00
2	2021-04-24 21:19:54.543+00	221926	2	2023-04-02 19:02:30.356+00	2023-04-02 19:02:30.356+00
3	2021-12-07 22:45:03.658+00	830201	6	2023-04-02 19:02:30.361+00	2023-04-02 19:02:30.361+00
4	2023-01-15 13:22:20.629+00	301145	5	2023-04-02 19:02:30.368+00	2023-04-02 19:02:30.368+00
5	2022-04-25 03:01:15.523+00	223325	4	2023-04-02 19:02:30.373+00	2023-04-02 19:02:30.373+00
6	2021-07-02 00:40:26.699+00	539113	20	2023-04-02 19:02:30.378+00	2023-04-02 19:02:30.378+00
7	2023-03-31 17:19:24.712+00	744530	12	2023-04-02 19:02:30.385+00	2023-04-02 19:02:30.385+00
8	2021-09-28 12:14:49.212+00	474960	17	2023-04-02 19:02:30.391+00	2023-04-02 19:02:30.391+00
9	2022-06-25 13:10:53.206+00	207606	13	2023-04-02 19:02:30.396+00	2023-04-02 19:02:30.396+00
10	2022-12-11 04:59:51.414+00	385393	17	2023-04-02 19:02:30.404+00	2023-04-02 19:02:30.404+00
11	2021-09-15 12:47:45.363+00	647655	11	2023-04-02 19:02:30.409+00	2023-04-02 19:02:30.409+00
12	2021-04-03 09:45:05.187+00	544548	13	2023-04-02 19:02:30.416+00	2023-04-02 19:02:30.416+00
13	2022-03-16 17:24:18.041+00	797198	6	2023-04-02 19:02:30.422+00	2023-04-02 19:02:30.422+00
14	2021-08-13 12:51:34.762+00	276707	15	2023-04-02 19:02:30.428+00	2023-04-02 19:02:30.428+00
15	2021-11-23 09:41:12.589+00	243751	11	2023-04-02 19:02:30.433+00	2023-04-02 19:02:30.433+00
16	2022-05-08 21:38:26.623+00	517548	16	2023-04-02 19:02:30.438+00	2023-04-02 19:02:30.438+00
17	2022-05-29 15:40:52.857+00	906801	15	2023-04-02 19:02:30.444+00	2023-04-02 19:02:30.444+00
18	2021-11-12 18:13:00.67+00	967268	13	2023-04-02 19:02:30.45+00	2023-04-02 19:02:30.45+00
19	2023-03-05 10:41:01.64+00	230403	8	2023-04-02 19:02:30.455+00	2023-04-02 19:02:30.455+00
20	2021-04-04 03:27:02.52+00	623748	8	2023-04-02 19:02:30.461+00	2023-04-02 19:02:30.461+00
\.


--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 218
-- Name: ALQUILERES_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: jonsteve
--

SELECT pg_catalog.setval('public."ALQUILERES_ID_seq"', 30, true);


--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 214
-- Name: CARROS_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: jonsteve
--

SELECT pg_catalog.setval('public."CARROS_ID_seq"', 50, true);


--
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 216
-- Name: CLIENTES_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: jonsteve
--

SELECT pg_catalog.setval('public."CLIENTES_ID_seq"', 50, true);


--
-- TOC entry 3368 (class 0 OID 0)
-- Dependencies: 220
-- Name: PAGOS_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: jonsteve
--

SELECT pg_catalog.setval('public."PAGOS_ID_seq"', 20, true);


--
-- TOC entry 3200 (class 2606 OID 32307)
-- Name: ALQUILERES ALQUILERES_pkey; Type: CONSTRAINT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."ALQUILERES"
    ADD CONSTRAINT "ALQUILERES_pkey" PRIMARY KEY ("ID");


--
-- TOC entry 3196 (class 2606 OID 32293)
-- Name: CARROS CARROS_pkey; Type: CONSTRAINT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."CARROS"
    ADD CONSTRAINT "CARROS_pkey" PRIMARY KEY ("ID");


--
-- TOC entry 3198 (class 2606 OID 32300)
-- Name: CLIENTES CLIENTES_pkey; Type: CONSTRAINT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."CLIENTES"
    ADD CONSTRAINT "CLIENTES_pkey" PRIMARY KEY ("ID");


--
-- TOC entry 3202 (class 2606 OID 32324)
-- Name: PAGOS PAGOS_pkey; Type: CONSTRAINT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."PAGOS"
    ADD CONSTRAINT "PAGOS_pkey" PRIMARY KEY ("ID");


--
-- TOC entry 3203 (class 2606 OID 32308)
-- Name: ALQUILERES ALQUILERES_CARRO_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."ALQUILERES"
    ADD CONSTRAINT "ALQUILERES_CARRO_ID_fkey" FOREIGN KEY ("CARRO_ID") REFERENCES public."CARROS"("ID") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3204 (class 2606 OID 32313)
-- Name: ALQUILERES ALQUILERES_CLIENTE_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."ALQUILERES"
    ADD CONSTRAINT "ALQUILERES_CLIENTE_ID_fkey" FOREIGN KEY ("CLIENTE_ID") REFERENCES public."CLIENTES"("ID") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3205 (class 2606 OID 32325)
-- Name: PAGOS PAGOS_ALQUILER_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jonsteve
--

ALTER TABLE ONLY public."PAGOS"
    ADD CONSTRAINT "PAGOS_ALQUILER_ID_fkey" FOREIGN KEY ("ALQUILER_ID") REFERENCES public."ALQUILERES"("ID") ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2023-04-02 20:55:30 UTC

--
-- PostgreSQL database dump complete
--



--
-- PostgreSQL dump custom querys
--

-- 1.2. Cuantos alquileres ha tenido un carro especifico desde una fecha especifica. (10 %)

SELECT a.*
FROM public."ALQUILERES" a
INNER JOIN public."CARROS" c ON a."CARRO_ID" = c."ID"
WHERE c."PLACA" = '1cju3s' AND a."FECHA" >= '2021-01-21';

-- 1.3. El total de saldo en un dia especico. (10 %)

SELECT SUM("SALDO") AS "TOTAL_SALDO"
FROM public."ALQUILERES"
WHERE "FECHA"::date = '2023-01-21'

-- 1.4. Realice una consulta asi: (20 %)

SELECT 
    "CLIENTES"."CEDULA",
    "CLIENTES"."NOMBRE",
    "ALQUILERES"."FECHA" AS "FECHA_ALQUILER",
    EXTRACT (DAY FROM (NOW() - "ALQUILERES"."FECHA")) AS "TIEMPO_ALQUILER",
    "ALQUILERES"."SALDO",
    "CARROS"."PLACA",
    "CARROS"."MARCA" 
FROM 
    public."ALQUILERES" 
    INNER JOIN public."CARROS" 
        ON "ALQUILERES"."CARRO_ID" = "CARROS"."ID" 
    INNER JOIN public."CLIENTES" 
        ON "ALQUILERES"."CLIENTE_ID" = "CLIENTES"."ID" 
WHERE 
    "ALQUILERES"."DEVUELTO" = false;

-- 1.5. Los clientes que no han alquilado en un periodo especifico. (10 %)

SELECT 
    "CLIENTES"."CEDULA", 
    "CLIENTES"."NOMBRE"
FROM 
    public."CLIENTES"
WHERE 
    "CLIENTES"."ID" NOT IN (
        SELECT DISTINCT 
            "ALQUILERES"."CLIENTE_ID"
        FROM public."ALQUILERES"
        WHERE 
            "ALQUILERES"."DEVUELTO" = false 
            AND "ALQUILERES"."FECHA" BETWEEN '2021-01-01' AND '2021-03-31'
    );

-- 1.6. Realice la siguiente consulta desde una fecha especifica. (15 %)

SELECT 
    "ALQUILERES"."FECHA" AS "FECHA_ALQUILER",
    COUNT("PAGOS"."ID") AS "CUANTOS_PAGOS",
    SUM("PAGOS"."VALOR") AS "TOTAL_PAGADO",
    MAX("PAGOS"."VALOR") AS "MAXIMO_VALOR_PAGADO"
FROM 
    public."ALQUILERES"
    INNER JOIN public."PAGOS" ON "ALQUILERES"."ID" = "PAGOS"."ALQUILER_ID"
WHERE 
    "ALQUILERES"."FECHA" >= '2022-01-21'
GROUP BY 
    "ALQUILERES"."ID", 
    "ALQUILERES"."FECHA";

-- 1.7. una consulta asi: consolidado por carros en un periodo especifico. (20 %)

SELECT 
    "CARROS"."ID" AS "CODIGO_CARRO",
    "CARROS"."MODELO",
    "CARROS"."MARCA",
    "CARROS"."COSTO",
    COUNT("ALQUILERES"."ID") AS "CUANTOS_ALQUILERES",
    SUM("ALQUILERES"."VALOR_TOTAL") AS "TOTAL_ALQUILERES"
FROM 
    public."CARROS"
    INNER JOIN public."ALQUILERES" ON "CARROS"."ID" = "ALQUILERES"."CARRO_ID"
WHERE 
    "ALQUILERES"."FECHA" BETWEEN '2022-08-08' AND '2023-01-21'
GROUP BY 
    "CARROS"."ID", 
    "CARROS"."MODELO",
    "CARROS"."MARCA",
    "CARROS"."COSTO";


-- 1.8. El primer alquiler de un cliente (5 %)

SELECT 
    "ALQUILERES"."FECHA",
    "ALQUILERES"."TIEMPO",
    "ALQUILERES"."VALOR_TOTAL",
    "ALQUILERES"."SALDO",
    "ALQUILERES"."ABONO_INICIAL",
    "ALQUILERES"."DEVUELTO",
    "CLIENTES"."NOMBRE",
    "CLIENTES"."CEDULA",
    "CARROS"."MARCA" AS "MARCA_CARRO",
    "CARROS"."MODELO" AS "MODELO_CARRO"
FROM public."ALQUILERES"
    JOIN public."CLIENTES" ON "ALQUILERES"."CLIENTE_ID" = "CLIENTES"."ID"
    JOIN public."CARROS" ON "ALQUILERES"."CARRO_ID" = "CARROS"."ID"
WHERE 
    "ALQUILERES"."CLIENTE_ID" = 3
ORDER BY 
    "ALQUILERES"."FECHA"
LIMIT 1;


-- Completed on 2023-04-02 20:59:06 UTC

--
-- PostgreSQL database dump complete
--
