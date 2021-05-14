<template>
    <footer class="bg-light">
        <!-- Info -->
        <div class="container space-2">
            <div class="row align-items-md-center text-center text-md-left">
                <div class="col-md-6 mb-3 mb-md-0">
                    <h2>Share your Block List on Refine.</h2>
                    <p class="mb-0">
                        Take control of your own social media - collectively.
                    </p>
                </div>
                <div class="col-md-6 text-md-right">
                    <router-link class="btn btn-primary transition-3d-hover" to="/create">Submit your List</router-link>
                </div>
            </div>
        </div>
        <!-- End Info -->

        <!-- Lists -->
        <div class="container">
            <div class="border-top space-2">
                <div class="row justify-content-md-between">
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <a class="d-inline-flex mb-4" href="index.html" aria-label="Front">
                            <img class="brand" src="~@/assets/svg/logos/logo.svg" alt="Logo" />
                        </a>
                        <p>Refine your online experiences.</p>
                        <a class="btn btn-outline-pnk py-1" href="https://kleros.io/" target="_blank"
                            >Secured by
                            <span class="font-size-1 ml-1 mr-1 mb-5"><i class="icon-kleros_mark"></i></span>Kleros
                        </a>
                    </div>

                    <div class="col-6 col-sm-4 col-lg-2 mb-4 mb-lg-0">
                        <h5>Refine</h5>

                        <!-- Nav Link -->
                        <ul class="nav nav-sm nav-x-0 flex-column">
                            <li class="nav-item"><a class="nav-link" href="">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="">Blog</a></li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Integrations</a>
                            </li>
                        </ul>
                        <!-- End Nav Link -->
                    </div>

                    <div class="col-6 col-sm-4 col-lg-2 mb-4 mb-lg-0">
                        <h5>Resources</h5>

                        <!-- Nav Link -->
                        <ul class="nav nav-sm nav-x-0 flex-column">
                            <li class="nav-item"><a class="nav-link" href="#">FAQ</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Terms</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
                        </ul>
                        <!-- End Nav Link -->
                    </div>

                    <div class="col-6 col-sm-4 col-lg-2">
                        <h5>Resources</h5>

                        <!-- Nav Link -->
                        <ul class="nav nav-sm nav-x-0 flex-column">
                            <li class="nav-item">
                                <a class="btn btn-icon btn-m btn-ghost-secondary rounded-circle" href="#">
                                    <i class="fab fa-discord"></i>
                                </a>

                                <a class="btn btn-icon btn-m btn-ghost-secondary rounded-circle" href="#">
                                    <i class="fab fa-medium"></i>
                                </a>

                                <a class="btn btn-icon btn-m btn-ghost-secondary rounded-circle" href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                        <!-- End Nav Link -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Lists -->
    </footer>
</template>
